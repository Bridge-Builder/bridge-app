import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

// POST /api/user/join
// Required fields in body: name, email
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.user.create({
    data: {
      ...req.body
    }
  });
  console.log('result', result);
  return res.status(201).json(result);
}
