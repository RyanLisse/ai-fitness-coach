import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST() {
  const openai = new OpenAI();

  try {
    const thread = await openai.beta.threads.create();
    console.log(thread);

    return NextResponse.json({ thread: thread }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
