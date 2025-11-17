import { JsonRpcProvider } from "ethers";

export const provider = new JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
);
