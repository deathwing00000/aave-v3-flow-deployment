import {
  isTestnetMarket,
  loadPoolConfig,
} from "./../helpers/market-config-helpers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { MARKET_NAME } from "../helpers/env";
import { getPoolConfiguratorProxy, waitForTx } from "../helpers";

/**
 * The following script runs after the deployment starts
 */

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  ...hre
}: HardhatRuntimeEnvironment) {
  console.log("=== Post deployment hook ===");
  const poolConfig = loadPoolConfig(MARKET_NAME);

  console.log("- Enable stable borrow in selected assets");
  await hre.run("review-stable-borrow", { fix: true, vvv: true });

  console.log("- Review rate strategies");
  await hre.run("review-rate-strategies");

  console.log("- Setup Debt Ceiling");
  await hre.run("setup-debt-ceiling");

  console.log("- Setup Borrowable assets in Isolation Mode");
  await hre.run("setup-isolation-mode");

  console.log("- Setup E-Modes");
  await hre.run("setup-e-modes");

  console.log("- Setup Liquidation protocol fee");
  await hre.run("setup-liquidation-protocol-fee");

  // if (isTestnetMarket(poolConfig)) {
  //   // Disable faucet minting and borrowing of wrapped native token
  //   console.log("check1");
  //   await hre.run("disable-faucet-native-testnets");
  //   console.log("check1");
  //   console.log("- Minting and borrowing of wrapped native token disabled");

  //   // Unpause pool
  //   console.log("check1");
  //   const poolConfigurator = await getPoolConfiguratorProxy();
  //   console.log("check1");
  //   await waitForTx(await poolConfigurator.setPoolPause(false));
  //   console.log("- Pool unpaused and accepting deposits.");
  // }

  // if (process.env.TRANSFER_OWNERSHIP === "true") {
  //   console.log("check2");
  //   await hre.run("transfer-protocol-ownership");
  //   console.log("check2");
  //   await hre.run("renounce-pool-admin");
  //   await hre.run("view-protocol-roles");
  // }

  await hre.run("print-deployments");
};

func.tags = ["after-deploy"];
func.runAtTheEnd = true;
export default func;
