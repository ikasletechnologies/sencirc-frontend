export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export interface PressRelease {
  id: string;
  title: string;
  content: string;
  date: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}
