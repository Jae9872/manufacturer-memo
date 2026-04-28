# QuoteClarity

Decode factory quotes instantly. No fluff, just facts. Built for UK indie brands.

## Features

- **Structured AI Analysis**: Get concise, actionable insights from factory quotes in seconds
- **Plain English Translation**: Converts jargon-filled manufacturing quotes into clear facts
- **UK-Specific Guidance**: Focuses on UK customs, Incoterms, VAT, and compliance requirements
- **Clean, Professional Design**: Minimalist interface focused on readability and speed

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Get a free Gemini API key from [Google AI Studio](https://aistudio.google.com/)
   - Create `.env.local` file and add:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## How It Works

1. Paste your factory quote, email, or specification sheet into the text area
2. Click "Analyze Quote"
3. Receive a structured analysis with:
   - **Plain English Summary**: What the factory is offering (MOQs, timelines)
   - **Hidden Costs & Jargon**: Incoterms breakdown, missing costs (Freight, VAT, Duties)
   - **UK Compliance Checklist**: Required certifications for your product type
   - **Negotiator's Pushback**: 3 critical questions to ask the factory

## Deployment to Azure Static Web Apps

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/manufacturer-memo.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy via Azure Portal:**
   - Go to [Azure Portal](https://portal.azure.com/)
   - Search for "Static Web Apps"
   - Click "Create" → "Link to GitHub"
   - Select your repository
   - Build preset: **Next.js**
   - Add environment variable: `GEMINI_API_KEY` with your actual API key
   - Click "Review + Create"

## Built With

- [Next.js 16](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [React Markdown](https://github.com/remarkjs/react-markdown)

## License

MIT
