import Prompt from "@models/Prompt";
import { ConnectToDB } from "@utils/database";
import { NextApiRequest } from "next";

export const GET = async (req: NextApiRequest, { params }: any) => {
  try {
    await ConnectToDB();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to Fetch Prompt", { status: 500 });
  }
};
