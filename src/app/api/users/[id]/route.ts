import { deleteUser, updateInformation } from '@/server/services/user.service';
import jsonResponse from '@/server/utils/json-response';
import { NextRequest } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const data = await request.json();
  const updatedUser = await updateInformation({ ...data, id });
  return jsonResponse(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await deleteUser(id);
  return jsonResponse({ message: 'User deleted' });
}
