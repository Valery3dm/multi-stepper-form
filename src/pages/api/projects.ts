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
  res: NextApiResponse<FormData[] | FormData | { message: string }>,
) {
  if (req.method === 'GET') {
    await connectDB();

    const projects = await Project.find({});
    res.status(200).json(projects);
  }

  if (req.method === 'POST') {
    try {
      const data: FormData = JSON.parse(req.body);

      await connectDB();
      const newProject = new Project(data);

      await newProject.save();
      return res.status(201).json(newProject);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: 'Failed to create a new Project' });
    }
  }
}
