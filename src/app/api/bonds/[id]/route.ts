import { Bond } from '@/server/entities/Bond';
import { deleteBond, updateBond } from '@/server/services/bond.service';
import jsonResponse from '@/server/utils/json-response';

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const result = await deleteBond(id);
  return jsonResponse(result);
}

export async function PUT(request: Request) {
  const data: Bond = await request.json();
  const updatedBond = await updateBond(data);
  return jsonResponse(updatedBond);
}
