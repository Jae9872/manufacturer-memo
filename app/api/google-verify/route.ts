import { NextResponse } from 'next/server'

// Google Search Console verification
// Replace 'YOUR_VERIFICATION_CODE' with the actual code from Google Search Console
const GOOGLE_VERIFICATION_CODE = process.env.GOOGLE_VERIFICATION_CODE || 'YOUR_VERIFICATION_CODE_HERE'

export async function GET() {
  return new NextResponse(GOOGLE_VERIFICATION_CODE, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
