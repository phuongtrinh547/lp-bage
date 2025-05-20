export const runtime = 'nodejs';

import { Bond } from '@/server/entities/Bond';
import { addBond, getAllBonds } from '@/server/services/bond.service';
import jsonResponse from '@/server/utils/json-response';

export async function GET() {
  const bonds = await getAllBonds();
  return jsonResponse(bonds);
}

export async function POST(request: Request) {
  const data: Bond = await request.json();
  const newBond = await addBond(data);
  return jsonResponse(newBond);
}
