import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    // TODO: Send via mail provider or CMS webhook
    console.log('Contact form submission:', data)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
