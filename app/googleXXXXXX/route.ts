import { NextResponse } from 'next/server'

// Google Search Console verification
export async function GET() {
  return new NextResponse('google-site-verification: Xd0RAaCI7vjQ17au_TmL4xfoQVmQrH4P3VBXXdY1Jew', {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
