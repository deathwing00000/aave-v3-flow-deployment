import {
  rateStrategyVolatileOneFlow,
  rateStrategyVolatileTwoFlow,
  rateStrategyVolatileThreeFlow,
  rateStrategyStableOneFlow,
  rateStrategyStableTwoFlow,
} from "./rateStrategies";
import { eFlowNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import {
  strategyWFLOW,
  strategyANKRFLOW,
  strategyCbBtc,
  strategyUSDCe,
} from "./reservesConfig";
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
    "USDC.E": strategyUSDCe,
    CBBTC: strategyCbBtc,
  },
  ReserveAssets: {
    [eFlowNetwork.main]: {
      WFLOW: "0xd3bF53DAC106A0290B0483EcBC89d40FcC961f3e",
      ANKRFLOW: "0x1b97100eA1D7126C4d60027e231EA4CB25314bdb",
      "USDC.E": "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
      CBBTC: "0xA0197b2044D28b08Be34d98b23c9312158Ea9A18",
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
    [eFlowNetwork.main]: {
      WFLOW: "0xA0f0D87c10A5DedBD79c2EE116bea1339bF5525D",
      ANKRFLOW: "0x3b23423201B3F0a684fA12222e092ED9ebeA7f62",
      "USDC.E": "0xA03738Db9b78Ee011a1607B4726C11862EaB1f40",
      CBBTC: "0x792be9af3e07e9C27B7575Af31C678Fe4BF2a0Ab",
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
  RateStrategies: {
    rateStrategyVolatileOneFlow,
    rateStrategyVolatileTwoFlow,
    rateStrategyVolatileThreeFlow,
    rateStrategyStableOneFlow,
    rateStrategyStableTwoFlow,
  },
};

export default FlowMarket;
