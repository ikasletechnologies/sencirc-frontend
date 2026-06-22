import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.pressRelease.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting press release:', error);
    return NextResponse.json(
      { error: 'Failed to delete press release' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, content, date } = body;

    if (!title || !content || !date) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const item = await prisma.pressRelease.update({
      where: { id },
      data: {
        title,
        content,
        date: new Date(date),
      },
    });

    return NextResponse.json(item);
  } catch (error) {
    console.error('Error updating press release:', error);
    return NextResponse.json(
      { error: 'Failed to update press release' },
      { status: 500 }
    );
  }
}
