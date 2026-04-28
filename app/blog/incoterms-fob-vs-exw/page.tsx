import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Incoterms: FOB vs EXW Explained | QuoteClarity",
  description: "A plain-English guide to FOB (Free On Board) and EXW (Ex Works) Incoterms used in international manufacturing quotes.",
};

export default function IncotermsGuide() {
  return (
    <div className="min-h-screen bg-[#F7F7F2]">
      <div className="max-w-3xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <article className="prose prose-slate max-w-none mx-auto">
          <h1 className="text-5xl font-serif text-slate-900 mb-4">
            Understanding Incoterms: FOB vs EXW Explained
          </h1>
          <time className="text-sm text-slate-500">April 28, 2026</time>
          
          <div className="mt-8 space-y-6">
            <p>
              When you receive a factory quote from an international manufacturer, you'll often see terms like "FOB Shenzhen" or "EXW Guangzhou". These are Incoterms (International Commercial Terms) that define who pays for shipping, insurance, and customs.
            </p>

            <h2>What is FOB (Free On Board)?</h2>
            <p>
              With FOB, the seller (factory) is responsible for delivering the goods onto the vessel at the port of shipment. Once the goods are on board, the risk transfers to the buyer (you).
            </p>
            <ul>
              <li><strong>Seller pays:</strong> Inland transport, export clearance, origin terminal charges</li>
              <li><strong>Buyer pays:</strong> Main carriage (ocean freight), insurance, import duties, VAT</li>
            </ul>

            <h2>What is EXW (Ex Works)?</h2>
            <p>
              With EXW, the seller only makes the goods available at their premises. You (the buyer) are responsible for everything else - from pickup to delivery to your UK warehouse.
            </p>
            <ul>
              <li><strong>Buyer pays:</strong> EVERYTHING - inland transport, export clearance, ocean freight, insurance, import duties, VAT</li>
            </ul>

            <h2>Which is better for UK indie brands?</h2>
            <p>
              <strong>FOB is usually better</strong> for UK indie brands because:
            </p>
            <ul>
              <li>You don't need to arrange pickup from the factory (complex in China/India)</li>
              <li>The factory handles export clearance</li>
              <li>You can use a UK freight forwarder for better rates on ocean freight</li>
            </ul>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[#E0E0D0] mt-8">
              <h3 className="text-xl font-serif mb-4">Quick Calculator</h3>
              <p className="mb-4">For a £10,000 order:</p>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2">Cost Type</th>
                    <th className="text-right pb-2">FOB</th>
                    <th className="text-right pb-2">EXW</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Factory Price</td>
                    <td className="text-right">£10,000</td>
                    <td className="text-right">£10,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Inland Transport (China to Port)</td>
                    <td className="text-right">£0 (included)</td>
                    <td className="text-right">£300</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Export Clearance</td>
                    <td className="text-right">£0 (included)</td>
                    <td className="text-right">£150</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Ocean Freight (China to UK)</td>
                    <td className="text-right">£800</td>
                    <td className="text-right">£800</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">UK Import Duties (varies by product)</td>
                    <td className="text-right">£300-£1,000</td>
                    <td className="text-right">£300-£1,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">UK VAT (20%)</td>
                    <td className="text-right">£2,000</td>
                    <td className="text-right">£2,000</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-2">Total Estimated Cost</td>
                    <td className="text-right">£13,100-£13,800</td>
                    <td className="text-right">£13,550-£14,250</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/"
                className="inline-block py-4 px-8 font-medium text-slate-900 bg-white/70 backdrop-blur-sm border-2 border-[#E0E0D0] rounded-xl hover:bg-white/80 transition-all duration-300"
              >
                Try QuoteClarity Now
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
