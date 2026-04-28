import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Cosmetics Compliance Checklist 2026 | QuoteClarity",
  description: "What certifications and labels your beauty products need before clearing UK customs in 2026.",
};

export default function ComplianceGuide() {
  return (
    <div className="min-h-screen bg-[#F7F7F2]">
      <div className="max-w-3xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <article className="prose prose-slate max-w-none mx-auto">
          <h1 className="text-5xl font-serif text-slate-900 mb-4">
            UK Cosmetics Compliance Checklist 2026
          </h1>
          <time className="text-sm text-slate-500">April 28, 2026</time>
          
          <div className="mt-8 space-y-6">
            <p>
              Before your factory shipment clears UK customs, ensure these certifications and labels are in place. Missing any of these can result in your goods being held or destroyed.
            </p>

            <h2>1. UKCA Marking (Required)</h2>
            <p>
              Since Brexit, products sold in Great Britain must have UKCA marking instead of (or in addition to) CE marking. This applies to cosmetics, electronics, and machinery.
            </p>
            <ul>
              <li>Must be self-declared by the manufacturer</li>
              <li>Technical documentation must be available</li>
              <li>UK-based Responsible Person must be appointed</li>
            </ul>

            <h2>2. Cosmetic Product Safety Report (CPSR)</h2>
            <p>
              Required for all cosmetics sold in the UK. Must be completed by a qualified safety assessor.
            </p>
            <ul>
              <li>Part A: Product dossier (formula, manufacturing method)</li>
              <li>Part B: Safety assessment (toxicological profile)</li>
              <li>Cost: £150-£400 per formulation</li>
            </ul>

            <h2>3. Ingredients Labeling (Strict Rules)</h2>
            <p>
              Your product labels must include:
            </p>
            <ul>
              <li>Full ingredients list (INCI names)</li>
              <li>Warning statements (where applicable)</li>
              <li>Batch number</li>
              <li>Best before date or Period After Opening (PAO)</li>
              <li>Function of product (e.g., "face cream")</li>
              <li>Net content (e.g., "50ml")</li>
              <li>Name and address of UK Responsible Person</li>
            </ul>

            <h2>4. Notification to MHRA</h2>
            <p>
              All cosmetics must be notified to the Medicines and Healthcare products Regulatory Agency (MHRA) before being placed on the UK market.
            </p>
            <ul>
              <li>Submit via the "Submit Cosmetics Products" (SCP) portal</li>
              <li>Free of charge</li>
              <li>Must be done BEFORE products are sold</li>
            </ul>

            <h2>5. Animal Testing Ban</h2>
            <p>
              It is illegal to sell cosmetics in the UK if the finished product or ingredients have been tested on animals.
            </p>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-[#E0E0D0] mt-8">
              <h3 className="text-xl font-serif mb-4">Quick Compliance Cost Estimator</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2">Item</th>
                    <th className="text-right pb-2">Cost (GBP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">CPSR (per formulation)</td>
                    <td className="text-right">£150 - £400</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">UK Responsible Person (annual)</td>
                    <td className="text-right">£500 - £2,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">UKCA testing (if needed)</td>
                    <td className="text-right">£1,000 - £5,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Label design & printing</td>
                    <td className="text-right">£200 - £500</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-2">Total Estimated</td>
                    <td className="text-right">£1,850 - £7,900</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-slate-500 mt-4">Note: These costs are per product line, not per unit.</p>
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
