import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ ok: true, message: 'Hook this endpoint up to your real form handler or CRM.' });
}
