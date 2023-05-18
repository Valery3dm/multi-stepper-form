import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/database';
import { Project } from '@/models/project';

type FormData = {
  _id: string;
  projectName: string;
  projectURL: string;
  projectCategory: string;
  projectDetails: string;
  workers: number;
  productLaunch: string;
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FormData[]>,
) {
  if (req.method === 'GET') {
    await connectDB();

    const projects = await Project.find({});
    res.status(200).json(projects);
  }
}
