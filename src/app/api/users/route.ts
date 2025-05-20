import { getAllUser, register } from '@/server/services/user.service';
import jsonResponse from '@/server/utils/json-response';
import { NextRequest } from 'next/server';

export async function GET() {
  const users = await getAllUser();
  return jsonResponse(users);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newUser = await register(data);
  return jsonResponse(newUser, 201);
}
