# Deployment Guide - Manufacturer Memo

## Quick Start Checklist

### 1. Get Gemini API Key (5 minutes)
1. Visit https://aistudio.google.com/
2. Sign in with your Google account
3. Click "Create API key"
4. Copy the key
5. Edit `.env.local` and replace:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   With:
   ```
   GEMINI_API_KEY=your_actual_key_here
   ```

### 2. Create GitHub Repository (5 minutes)
1. Go to https://github.com/new
2. Repository name: `manufacturer-memo`
3. Set to Public (required for free Azure Static Web Apps)
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

### 3. Push Code to GitHub (2 minutes)
Run these commands in terminal:
```bash
git remote add origin https://github.com/YOUR_USERNAME/manufacturer-memo.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Azure Static Web Apps (10 minutes)

#### Option A: Azure Portal (Easiest)
1. Go to https://portal.azure.com/
2. Search for "Static Web Apps"
3. Click "Create"
4. Fill in:
   - Subscription: Your subscription
   - Resource Group: Create new (e.g., `manufacturer-memo-rg`)
   - Name: `manufacturer-memo`
   - Plan type: Free (for testing) or Standard
   - Deployment details: Select "GitHub"
   - Sign in to GitHub when prompted
   - Organization: Your GitHub username
   - Repository: `manufacturer-memo`
   - Branch: `main`
   - Build Presets: Select "Next.js"
   - App location: `/`
   - API location: `app/api`
   - Output location: `.next`
5. Click "Review + Create" → "Create"
6. Once deployed, go to "Configuration" tab and add Environment Variable:
   - Name: `GEMINI_API_KEY`
   - Value: Your actual Gemini API key
7. Restart the application

#### Option B: Azure CLI (Advanced)
```bash
# Login to Azure
az login

# Create resource group
az group create --name manufacturer-memo-rg --location "UK South"

# Create static web app
az staticwebapp create \
  --name manufacturer-memo \
  --resource-group manufacturer-memo-rg \
  --source https://github.com/YOUR_USERNAME/manufacturer-memo \
  --location "UK South" \
  --branch main \
  --app-artifact-location ".next"

# Add environment variable
az staticwebapp appsettings set \
  --name manufacturer-memo \
  --resource-group manufacturer-memo-rg \
  --setting-names GEMINI_API_KEY=your_actual_key
```

### 5. Test Your Live Site
- Your site will be at: `https://manufacturer-memo.azurestaticapps.net`
- Paste a factory quote and verify the AI analysis works

## Troubleshooting

### Build Fails
```bash
npm run build
# Fix any errors, then commit and push
```

### API Returns 500 Error
- Check that `GEMINI_API_KEY` is set in Azure Configuration
- Verify the API key works locally first

### GitHub Actions Failing
- Check the "Actions" tab in your GitHub repo for error logs
- Ensure the `AZURE_STATIC_WEB_APPS_TOKEN` secret is set in GitHub repo settings

## Need Help?
- Azure Static Web Apps docs: https://learn.microsoft.com/azure/static-web-apps/
- Gemini API docs: https://ai.google.dev/docs
