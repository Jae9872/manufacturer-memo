import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [quoteInput, setQuoteInput] = useState("");
  const [markdownResult, setMarkdownResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const analyzeQuote = async () => {
    if (!quoteInput.trim()) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ factoryQuote: quoteInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMarkdownResult(data.result || "No result returned");
    } catch (error) {
      console.error("Error:", error);
      setMarkdownResult(`Error analyzing quote: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F2]">
      <div className="max-w-3xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-slate-900 mb-4 tracking-tighter">
            Manufacturer Memo
          </h1>
          <p className="text-xl font-light text-slate-600 max-w-2xl mx-auto">
            Instant clarity on international quotes. 100% Free.
          </p>
        </div>

        {/* Input Section */}
        <div className="space-y-6">
          <label htmlFor="quote-input" className="block text-slate-800 font-medium mb-2">
            Paste Factory Communication
          </label>
          <textarea
            id="quote-input"
            rows="8"
            placeholder="Paste the factory quote, email, or specification sheet here..."
            value={quoteInput}
            onChange={(e) => setQuoteInput(e.target.value)}
            className="w-full p-6 border-2 border-[#E0E0D0] rounded-xl bg-white/80 backdrop-blur-sm text-slate-900 focus:border-slate-500 focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 transition-all duration-300 resize-none font-serif text-lg textarea-luxury"
          />
          
          {/* The Button */}
          <button
            onClick={analyzeQuote}
            disabled={isLoading || !quoteInput.trim()}
            className="w-full py-4 px-8 font-medium text-slate-900 bg-white/70 backdrop-blur-sm border-2 border-[#E0E0D0] rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm btn-organic irregular-btn"
          >
            {isLoading ? "Analyzing Quote..." : "Analyze Quote"}
          </button>
        </div>

        {/* Results Section */}
        {markdownResult && (
          <div className="mt-20 pt-10 border-t-2 border-[#E0E0D0]">
            <h2 className="text-3xl font-serif text-slate-900 mb-8 text-center">
              Analysis Results
            </h2>
            <div className="prose prose-slate max-w-none mx-auto">
              <ReactMarkdown>{markdownResult}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
