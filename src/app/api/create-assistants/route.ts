import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface Assistant {
  name: string;
  description: string | null;
  model: string;
  instructions: string;
  tools: any[];
  top_p: number;
  temperature: number;
  metadata: Record<string, any>;
  response_format?: string;
}

export async function POST(request: NextRequest) {
  try {
    const assistants: Assistant[] = await request.json();
    const results = [];

    for (const assistant of assistants) {
      try {
        const createdAssistant = await openai.beta.assistants.create({
          name: assistant.name,
          description: assistant.description,
          model: assistant.model,
          instructions: assistant.instructions,
          tools: assistant.tools,
          top_p: assistant.top_p,
          temperature: assistant.temperature,
          metadata: assistant.metadata,
          response_format: assistant.response_format,
        });
        results.push({
          name: assistant.name,
          id: createdAssistant.id,
          status: "success",
        });
      } catch (error) {
        results.push({
          name: assistant.name,
          status: "error",
          message: (error as Error).message,
        });
      }
    }

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create assistants" },
      { status: 500 }
    );
  }
}
