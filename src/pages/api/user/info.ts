import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

// POST /api/user
// Required fields in body: name, email
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.user.findMany();
  return res.status(200).json(result);
}
