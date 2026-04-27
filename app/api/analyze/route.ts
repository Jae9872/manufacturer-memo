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

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "your_gemini_api_key_here") {
      return new Response(
        JSON.stringify({ 
          result: `## Demo Mode - Add Your Gemini API Key

This is a demonstration of the analysis format. To get real AI-powered analysis:

1. Get a free API key from [Google AI Studio](https://aistudio.google.com/)
2. Add it to your \`.env.local\` file as \`GEMINI_API_KEY=your_actual_key\`
3. Restart the server

### 1. Plain English Summary
This would show what the factory is offering including MOQs and timelines.

### 2. The Hidden Costs & Jargon
This would break down Incoterms (FOB, EXW, etc.) and identify missing costs like Freight Forwarding, UK VAT, and Customs Duties.

### 3. UK Compliance Checklist
This would list required UK certifications for your product type.

### 4. The Negotiator's Pushback
This would provide 3 critical questions to ask the factory.

---
*Add your API key to see the real AI analysis.*`
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `You are a senior UK Customs, Logistics, and Manufacturing Consultant. A user has provided text which is a quote, specification sheet, or communication from an international manufacturer, likely in China or India. 

Your job is to translate this jargon-filled text into plain English for a UK indie business owner. Keep the response very concise, authoritative, and structured in Markdown with these EXACT headers:

**1. Plain English Summary:** (What is the factory actually offering? Focus on quantities (MOQs) and timelines.)
**2. The Hidden Costs & Jargon:** (Break down specific Incoterms used like FOB vs. EXW. Identify missing costs like Freight Forwarding, UK VAT, and Customs Duties.)
**3. UK Compliance Checklist:** (What specific UK certifications are required for this product type—e.g., cosmetic compliance/labeling—before it clears customs?)
**4. The Negotiator's Pushback:** (Provide 3 critical questions the user must ask the factory next to protect themselves.)`;

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
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}