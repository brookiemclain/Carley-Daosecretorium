import { provider } from "@/src/lib/web3";

export async function GET() {
  const block = await provider.getBlockNumber();
  return Response.json({ block });
}
