import { eContractid, IReserveParams } from "../../helpers/types";
import {
  rateStrategyVolatileOneFlow,
  rateStrategyVolatileTwoFlow,
  rateStrategyVolatileThreeFlow,
  rateStrategyStableOneFlow,
  rateStrategyStableTwoFlow,
} from "./rateStrategies";

export const strategyWFLOW = {
  strategy: rateStrategyVolatileOneFlow,
  baseLTVAsCollateral: "8050",
  liquidationThreshold: "8300",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyANKRFLOW = {
  strategy: rateStrategyVolatileTwoFlow,
  baseLTVAsCollateral: "7500",
  liquidationThreshold: "7900",
  liquidationBonus: "10750",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyUSDCe = {
  strategy: rateStrategyStableOneFlow,
  baseLTVAsCollateral: "7500",
  liquidationThreshold: "7800",
  liquidationBonus: "10450",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  flashLoanEnabled: true,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyCbBtc = {
  strategy: rateStrategyVolatileThreeFlow,
  baseLTVAsCollateral: "7300",
  liquidationThreshold: "7800",
  liquidationBonus: "10750",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  flashLoanEnabled: true,
  reserveDecimals: "8",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};
