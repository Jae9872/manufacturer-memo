# QuoteClarity - Complete Project Documentation
**Created:** April 28, 2026 (while on vacation in Asia)  
**Status:** LIVE and RUNNING in UK  
**Live URL:** http://quoteclarity.huxangroup.com/

---

## 📋 WHAT WAS BUILT

**QuoteClarity** - A free AI tool that decodes international factory quotes for UK indie brands. Users paste factory quotes and get structured, no-fluff analysis in seconds.

### Core Features:
1. **AI-Powered Analysis** - Uses Google Gemini 2.5 Flash
2. **Structured Output** - Max 300 words, tables for costs, bullet points
3. **4 Analysis Sections:**
   - Plain English Summary (MOQ, lead time)
   - Hidden Costs & Jargon (Incoterms breakdown)
   - UK Compliance Checklist
   - 3 Critical Questions to Ask Factory
4. **SEO Optimized** - Blog section, structured data, sitemap
5. **Clean Design** - Minimalist, professional, fast

---

## 🛠️ TECH STACK USED

- **Framework:** Next.js 16.2.4 (App Router)
- **Styling:** Tailwind CSS v4
- **AI:** Google Gemini 2.5 Flash (`@google/generative-ai`)
- **Markdown:** react-markdown
- **Icons:** lucide-react
- **Deployment:** Azure Static Web Apps
- **Repository:** GitHub (https://github.com/Jae9872/manufacturer-memo)

---

## 📝 STEP-BY-STEP PROCESS (Template for Future Projects)

### Phase 1: Project Setup (15 mins)
```bash
# Create Next.js app
npx create-next-app@latest project-name
# Choose: TypeScript, Tailwind CSS, App Router, src/ directory: No

# Install dependencies
npm install @google/generative-ai react-markdown lucide-react @tailwindcss/typography

# Create .env.local
echo "GEMINI_API_KEY=your_key_here" > .env.local
```

### Phase 2: Build Core Features (1 hour)
1. **Create API Route** (`app/api/analyze/route.ts`):
   - POST endpoint that accepts factory quote
   - Calls Gemini AI with structured prompt
   - Returns markdown-formatted analysis

2. **Create Frontend** (`app/page.tsx`):
   - Textarea for quote input
   - Button to trigger analysis
   - ReactMarkdown to display results
   - Loading states and error handling

3. **Design System:**
   - Background: `#F7F7F2` (warm alabaster)
   - Font: Playfair Display (serif) + Geist (sans-serif)
   - Irregular button design with hover effects

### Phase 3: AI Prompt Engineering (30 mins)
**Key: Structured, no-fluff output**
```
CRITICAL INSTRUCTIONS:
- Be EXTREMELY concise. No fluff, no padding.
- Use bullet points and tables.
- Maximum 300 words total.
- Skip pleasantries.

Structure with EXACT headers:
## Summary
## Hidden Costs (use table)
## UK Compliance Required (use checkboxes)
## 3 Questions to Ask
```

### Phase 4: SEO & Deployment (45 mins)
1. **Metadata** (`app/layout.tsx`):
   - Title, description, keywords
   - Open Graph tags
   - Twitter cards
   - Structured data (JSON-LD)

2. **Sitemap** (`app/sitemap.ts`):
   - Auto-generates sitemap.xml
   - Include all pages

3. **Robots.txt** (`public/robots.txt`):
   - Allow all crawlers
   - Point to sitemap

4. **Blog Section** (`app/blog/`):
   - Create 3 SEO articles targeting keywords
   - Include cost calculators in tables
   - Link back to main tool

---

## 🚀 DEPLOYMENT STEPS (Do Exactly This)

### 1. Push to GitHub (5 mins)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/repo-name.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Azure Static Web Apps (10 mins)
1. Go to https://portal.azure.com/
2. Search "Static Web Apps" → Create
3. **GitHub Integration:**
   - Sign in with GitHub
   - Select repository
   - Branch: `main`
4. **Build Configuration:**
   - **CRITICAL:** Select "Next.js" from dropdown (NOT "Custom")
   - App location: `/`
   - API location: `app/api`
   - Output location: `.next`
5. **Environment Variables:**
   - Add: `GEMINI_API_KEY` = `your_api_key`
6. Review + Create → Wait 5-10 mins for deployment

### 3. Custom Domain Setup (5 mins)
1. Azure Portal → Your Static Web App → Custom domains
2. Click "Add custom domain"
3. Enter subdomain (e.g., `quoteclarity.huxangroup.com`)
4. Add CNAME record at your domain registrar:
   - **Type:** CNAME
   - **Name:** quoteclarity (or your subdomain)
   - **Value:** [your-app-name].azurestaticapps.net
5. Azure will verify and map automatically

---

## 🔍 SEO & GOOGLE RANKING CHECKLIST

### Immediate Actions (Do Today):
- [ ] **Google Search Console:** https://search.google.com/search-console
  - Add property: `https://your-domain.com/`
  - **Verify via DNS:** Add TXT record to domain DNS
  - Submit sitemap: `https://your-domain.com/sitemap.xml`
  - Request indexing for homepage

- [ ] **Google Analytics (Optional):**
  - Create GA4 property
  - Add measurement ID to your site

### Backlink Strategy (Ongoing):
- Post on Reddit: r/UKBusiness, r/entrepreneur, r/manufacturing
- LinkedIn post tagging UK indie brands
- Submit to UK business directories (free)
- Ask partners/logistics companies to link to you

### Content Marketing (Monthly):
- Add 1-2 blog posts targeting new keywords
- Examples:
  - "How to Read Factory Quotes"
  - "Incoterms Calculator 2026"
  - "UK Cosmetics Compliance Guide"

---

## 🔧 MAINTENANCE CHECKLIST

### Weekly:
- [ ] Check Google Search Console for errors
- [ ] Monitor Azure usage (stays free under limits)

### Monthly:
- [ ] Check for Next.js/Tailwind updates: `npm update`
- [ ] Review blog performance in Google Analytics
- [ ] Add new blog post if needed

### When API Key Expires:
1. Go to https://aistudio.google.com/
2. Create new API key
3. Azure Portal → Configuration → Update `GEMINI_API_KEY`
4. Save → Azure will redeploy automatically

---

## 📂 KEY FILES REFERENCE

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main UI - quote input and results display |
| `app/api/analyze/route.ts` | Backend API - calls Gemini AI |
| `app/layout.tsx` | Root layout - SEO metadata, fonts, structured data |
| `app/sitemap.ts` | Auto-generates sitemap.xml |
| `public/robots.txt` | Tells search engines what to crawl |
| `app/blog/` | SEO blog articles |
| `.env.local` | Environment variables (NOT committed to Git) |
| `staticwebapp.config.json` | Azure Static Web Apps config |
| `.github/workflows/azure-static-web-apps.yml` | Auto-deployment workflow |

---

## 🎯 KEY DECISIONS MADE (Learn from These!)

### 1. **Name Change:** "Manufacturer Memo" → "QuoteClarity"
   - **Why:** More professional, clearer value prop
   - **Lesson:** Test name with target audience before coding too much

### 2. **AI Output Structure:** Strict 300-word limit
   - **Why:** Users hate fluff, want facts fast
   - **Lesson:** Use tables and bullet points, not paragraphs

### 3. **Deployment Platform:** Azure Static Web Apps
   - **Why:** Free tier, easy GitHub integration, auto-deploys
   - **Lesson:** Always select "Next.js" preset (not Custom)

### 4. **Domain Choice:** quoteclarity.huxangroup.com
   - **Why:** Subdomain of existing corporate domain = instant trust
   - **Lesson:** Use existing domain if you have one

---

## 🚨 TROUBLESHOOTING

### Site shows 404:
- Check Azure deployment status in portal
- Verify `output_location` in workflow is `.next`

### API returns 500:
- Check `GEMINI_API_KEY` in Azure Configuration
- Test API locally with `npm run dev`

### Google won't verify:
- Use DNS verification method (not HTML tag)
- Add TXT record to domain DNS, wait 5 mins, then verify

### Build fails on Azure:
- Check `next.config.ts` - should be minimal for Azure Static Web Apps
- Ensure all dependencies are in `package.json` (not global)

---

## 📞 SUPPORT CONTACTS

**Developer:** Jae Pasha  
**Live Site:** http://quoteclarity.huxangroup.com/  
**GitHub Repo:** https://github.com/Jae9872/manufacturer-memo  
**Azure Portal:** https://portal.azure.com/ (search "Static Web Apps")

---

## 🎉 FINAL STATUS

✅ Site is LIVE and RUNNING in UK  
✅ Google Search Console verification code added  
✅ SEO optimized (blog, sitemap, structured data)  
✅ Custom domain connected  
✅ All code pushed to GitHub  
✅ Azure auto-deploys on every git push  

**NEXT STEP FOR USER:** Complete Google Search Console DNS verification (takes 2 mins)

---

*Document created: April 28, 2026*  
*Created while on vacation in Asia - proving you can ship from anywhere! 🌏*
