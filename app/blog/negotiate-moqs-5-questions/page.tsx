import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Negotiate MOQs: 5 Questions to Ask | QuoteClarity",
  description: "Protect your cash flow by asking these critical questions before signing with a factory.",
};

export default function NegotiationGuide() {
  return (
    <div className="min-h-screen bg-[#F7F7F2]">
      <div className="max-w-3xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <article className="prose prose-slate max-w-none mx-auto">
          <h1 className="text-5xl font-serif text-slate-900 mb-4">
            How to Negotiate MOQs: 5 Questions to Ask
          </h1>
          <time className="text-sm text-slate-500">April 28, 2026</time>
          
          <div className="mt-8 space-y-6">
            <p>
              Minimum Order Quantities (MOQs) can make or break your cash flow as an indie brand. Before you sign with a factory, ask these 5 critical questions to protect your business.
            </p>

            <h2>1. "Can the MOQ be split across variants?"</h2>
            <p>
              Many factories set MOQ at 1,000 units TOTAL, but won't tell you that you can split it across 5 different shades or scents. This gives you variety without doubling your cash outlay.
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#E0E0D0]">
              <p className="font-medium">Example:</p>
              <p>Instead of 1,000 units of one lipstick shade, negotiate: 200 units x 5 shades = 1,000 total.</p>
            </div>

            <h2>2. "What's the price break at 500 vs 1,000 vs 2,000 units?"</h2>
            <p>
              Factories often quote their "best price" at 1,000 units, but the jump from 500 to 1,000 might not be worth it. Get the full pricing tier table.
            </p>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-2">Quantity</th>
                  <th className="text-right pb-2">Price per Unit</th>
                  <th className="text-right pb-2">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">500</td>
                  <td className="text-right">£8.50</td>
                  <td className="text-right">£4,250</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">1,000</td>
                  <td className="text-right">£7.00</td>
                  <td className="text-right">£7,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">2,000</td>
                  <td className="text-right">£5.50</td>
                  <td className="text-right">£11,000</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-slate-500">In this example, ordering 500 units twice gives you more flexibility than one order of 1,000.</p>

            <h2>3. "What's included in the MOQ - packaging and labeling?"</h2>
            <p>
              Some factories quote MOQ for "product only" and then hit you with a separate MOQ for custom packaging (often another 1,000 units). Clarify this upfront.
            </p>
            <ul>
              <li>Does MOQ include your custom logo/branding?</li>
              <li>Is packaging included in the unit price?</li>
              <li>Can you use your own packaging materials?</li>
            </ul>

            <h2>4. "What's the penalty for canceling part of the order?"</h2>
            <p>
              If your sales are slower than expected, you need to know your options. Some factories allow order reductions up to 30 days before production.
            </p>

            <h2>5. "Can I order a sample batch below MOQ?"</h2>
            <p>
              Always, always order samples before committing to full MOQ. Ask for a "sample run" of 20-50 units to test quality, packaging, and market response.
            </p>
            <ul>
              <li>Sample cost: Usually 2x-3x the bulk unit price</li>
              <li>Lead time: Often 2-3 weeks (faster than bulk)</li>
              <li>Use this for product photography and pre-launch marketing</li>
            </ul>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[#E0E0D0] mt-8">
              <h3 className="text-xl font-serif mb-4">MOQ Negotiation Script</h3>
              <p className="italic text-slate-600">
                "We're interested in your 1,000 unit MOQ, but we'd like to split it across 5 variants (200 each). Can you also provide pricing for 500 units total? We're also planning a sample run of 30 units first to test the market. What would be the total cost and timeline for: (a) 30 sample units, (b) 500 units split across variants, and (c) 1,000 units split across variants?"
              </p>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/"
                className="inline-block py-4 px-8 font-medium text-slate-900 bg-white/70 backdrop-blur-sm border-2 border-[#E0E0D0] rounded-xl hover:bg-white/80 transition-all duration-300"
              >
                Analyze Your Factory Quote Now
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
