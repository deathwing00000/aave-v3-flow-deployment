import { parseUnits } from "ethers/lib/utils";
import { IInterestRateStrategyParams } from "../../helpers/types";

export const rateStrategyVolatileOneFlow = {
  name: "rateStrategyVolatileOneFlow",
  optimalUsageRatio: parseUnits("0.9", 27).toString(),
  baseVariableBorrowRate: "0",
  variableRateSlope1: parseUnits("0.027", 27).toString(),
  variableRateSlope2: parseUnits("0.8", 27).toString(),
  stableRateSlope1: parseUnits("0.027", 27).toString(),
  stableRateSlope2: parseUnits("0.8", 27).toString(),
  baseStableRateOffset: parseUnits("0.02", 27).toString(),
  stableRateExcessOffset: parseUnits("0.05", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};
export const rateStrategyVolatileTwoFlow = {
  name: "rateStrategyVolatileTwoFlow",
  optimalUsageRatio: parseUnits("0.45", 27).toString(),
  baseVariableBorrowRate: "0",
  variableRateSlope1: parseUnits("0.07", 27).toString(),
  variableRateSlope2: parseUnits("3", 27).toString(),
  stableRateSlope1: parseUnits("0.07", 27).toString(),
  stableRateSlope2: parseUnits("3", 27).toString(),
  baseStableRateOffset: parseUnits("0.02", 27).toString(),
  stableRateExcessOffset: parseUnits("0.05", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};
export const rateStrategyVolatileThreeFlow = {
  name: "rateStrategyVolatileThreelow",
  optimalUsageRatio: parseUnits("0.45", 27).toString(),
  baseVariableBorrowRate: "0",
  variableRateSlope1: parseUnits("0.04", 27).toString(),
  variableRateSlope2: parseUnits("3", 27).toString(),
  stableRateSlope1: parseUnits("0.04", 27).toString(),
  stableRateSlope2: parseUnits("3", 27).toString(),
  baseStableRateOffset: parseUnits("0.02", 27).toString(),
  stableRateExcessOffset: parseUnits("0.05", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};
export const rateStrategyStableOneFlow = {
  name: "rateStrategyStableOneFlow",
  optimalUsageRatio: parseUnits("0.92", 27).toString(),
  baseVariableBorrowRate: parseUnits("0", 27).toString(),
  variableRateSlope1: parseUnits("0.250", 27).toString(),
  variableRateSlope2: parseUnits("0.6", 27).toString(),
  stableRateSlope1: parseUnits("0.125", 27).toString(),
  stableRateSlope2: parseUnits("0.45", 27).toString(),
  baseStableRateOffset: parseUnits("0.02", 27).toString(),
  stableRateExcessOffset: parseUnits("0.05", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};
export const rateStrategyStableTwoFlow = {
  name: "rateStrategyStableTwoFlow",
  optimalUsageRatio: parseUnits("0.8", 27).toString(),
  baseVariableBorrowRate: parseUnits("0", 27).toString(),
  variableRateSlope1: parseUnits("0.04", 27).toString(),
  variableRateSlope2: parseUnits("0.75", 27).toString(),
  stableRateSlope1: parseUnits("0.02", 27).toString(),
  stableRateSlope2: parseUnits("0.75", 27).toString(),
  baseStableRateOffset: parseUnits("0.02", 27).toString(),
  stableRateExcessOffset: parseUnits("0.05", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};
