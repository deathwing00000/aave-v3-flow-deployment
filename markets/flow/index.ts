import { rateStrategyVolatileOne } from "./rateStrategies";
import { eFlowNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyWFLOW, strategyANKRFLOW } from "./reservesConfig";
import { ZERO_ADDRESS } from "../../helpers/constants";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const FlowMarket: IAaveConfiguration = {
  ...AaveMarket,
  MarketId: "Flow Aave Market",
  ATokenNamePrefix: "Flow",
  StableDebtTokenNamePrefix: "Flow",
  VariableDebtTokenNamePrefix: "Flow",
  SymbolPrefix: "Flow",
  ProviderId: 40,
  ReservesConfig: {
    WFLOW: strategyWFLOW,
    ANKRFLOW: strategyANKRFLOW,
  },
  ReserveAssets: {
    [eFlowNetwork.main]: {
      WFLOW: "0xd3bF53DAC106A0290B0483EcBC89d40FcC961f3e",
      ANKRFLOW: "0x1b97100eA1D7126C4d60027e231EA4CB25314bdb",
    },
    [eFlowNetwork.testnet]: {
      WFLOW: "0xd3bF53DAC106A0290B0483EcBC89d40FcC961f3e",
      ANKRFLOW: "0x8E3DC6E937B560ce6a1Aaa78AfC775228969D16c",
    },
  },
  ChainlinkAggregator: {
    [eFlowNetwork.testnet]: {
      WFLOW: "0xaCAd8eB605A93b8E0fF993f437f64155FB68D5DD",
      ANKRFLOW: "0xA6204a9Cc18E6CFcf3EB247DBE40d402d8735EB3",
    },
    // TODO: change addresses
    [eFlowNetwork.main]: {
      WFLOW: "0xaCAd8eB605A93b8E0fF993f437f64155FB68D5DD",
      ANKRFLOW: "0xA6204a9Cc18E6CFcf3EB247DBE40d402d8735EB3",
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Wrapped native tokens",
      assets: ["WFLOW", "ANKRFLOW"],
    },
  },
};

export default FlowMarket;
