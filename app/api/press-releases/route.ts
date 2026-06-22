import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const items = await prisma.pressRelease.findMany({
      orderBy: { date: 'desc' },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching press releases:', error);
    return NextResponse.json(
      { error: 'Failed to fetch press releases' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, date } = body;

    if (!title || !content || !date) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const item = await prisma.pressRelease.create({
      data: {
        title,
        content,
        date: new Date(date),
      },
    });

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('Error creating press release:', error);
    return NextResponse.json(
      { error: 'Failed to create press release' },
      { status: 500 }
    );
  }
}
