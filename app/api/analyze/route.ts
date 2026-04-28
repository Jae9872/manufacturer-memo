import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
  try {
    const { factoryQuote } = await request.json();

    if (!factoryQuote) {
      return new Response(
        JSON.stringify({ error: "Factory quote is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `You are a senior UK Customs, Logistics, and Manufacturing Consultant. A user has provided text which is a quote, specification sheet, or communication from an international manufacturer, likely in China or India.

Your job is to translate this jargon-filled text into plain English for a UK indie business owner.

CRITICAL INSTRUCTIONS:
- Be EXTREMELY concise. No fluff, no padding, no unnecessary words.
- Use bullet points and tables where possible.
- Maximum 300 words total.
- Skip pleasantries like "I hope this helps" or "Based on the provided text".
- Get straight to the facts.

Structure your response in Markdown with EXACTLY these sections:

## Summary
- What the factory is offering (product, quantity, price)
- MOQ: [state clearly]
- Lead time: [state clearly]

## Hidden Costs
| Cost Type | Estimated Amount | Notes |
|-----------|------------------|-------|
| [Incoterm] | £[amount] | [brief explanation] |
| UK VAT | £[amount] | 20% of value |
| Customs Duty | £[amount] | [percentage] |
| Freight | £[amount] | If not included |

## UK Compliance Required
- [ ] [Certification 1 - e.g., UKCA marking]
- [ ] [Certification 2]
- [ ] [Certification 3]

## 3 Questions to Ask
1. [Specific question about pricing/terms]
2. [Specific question about compliance/timeline]
3. [Specific question about hidden costs]`;

    const prompt = `${systemPrompt}

User's factory communication:
"${factoryQuote}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return new Response(
      JSON.stringify({ result: text }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in analyze route:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: `Server error: ${errorMessage}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}