import Prompt from "@models/Prompt";
import { ConnectToDB } from "@utils/database";
import { NextApiRequest } from "next";

export const POST = async (request: NextApiRequest) => {
  const { userId, prompt, tag } = await request.json();

  try {
    await ConnectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt: prompt,
      tag: tag,
    });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Prompt", { status: 500 });
  }
};
