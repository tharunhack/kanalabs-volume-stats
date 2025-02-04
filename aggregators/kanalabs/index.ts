import fetchURL from "../../utils/fetchURL";
import { SimpleAdapter } from "../../adapters/types";
import { CHAIN } from "../../helpers/chains";

const URL = "https://stats.kanalabs.io/volume";

const fetch = async (timestamp: number): Promise<any> => {
  const dailyVolume = (await fetchURL(`${URL}?chainId=1`)).data.data;

  return {
    last7Days: {
      volume: dailyVolume.last7Days.volume,
    },
    last30Days: {
      volume: dailyVolume.last30Days.volume,
    },
    today: {
      volume: dailyVolume.today.volume,
    },
  };
};

// Define the adapter
const adapter: SimpleAdapter = {
  adapter: {
    [CHAIN.ETHEREUM]: {
      fetch,
      start: async () => 0,
    },
  },
};

// Export the adapter
export default adapter;
