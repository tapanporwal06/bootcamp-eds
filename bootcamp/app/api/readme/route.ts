import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract form data fields
    const title = formData.get("title");
    const description = formData.get("description");
    const motive = formData.get("motive");
    const features = formData.get("features");
    const technologies = formData.get("technologies");
    const domain = formData.get("domain");
    const setup = formData.get("setup");

    // Construct the prompt
    const prompt = `
    Create a detailed README.md content for a project with the following information:
    
    Title: ${title}
    Description: ${description}
    Motive behind the project: ${motive}
    Features and Working: ${features}
    Technologies Used: ${technologies}
    Domain: ${domain}
    Setup Instructions: ${setup}
    
    Please format this as a well-structured document with normal text no markdown, and add appropriate sections and formatting.
    `;

    // Generate content using Google AI
    const { text } = await generateText({
      model: google("models/gemini-2.0-flash-exp"),
      prompt: prompt,
    });

    return NextResponse.json({ content: text }, { status: 200 });
  } catch (error) {
    console.error("Error generating README:", error);
    return NextResponse.json(
      { error: "Failed to generate README content" },
      { status: 500 }
    );
  }
}
