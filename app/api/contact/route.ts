import { NextResponse } from 'next/server';
import { SITE } from '@/lib/data/site';

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  interests?: string[];
  budget?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const formspreeId = process.env.FORMSPREE_ID;

    if (formspreeId) {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          phone: body.phone,
          message: body.message,
          interests: body.interests?.join(', '),
          budget: body.budget,
          _subject: `New inquiry — ${SITE.name}`,
        }),
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: 'Could not send message. Try calling us directly.' },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
