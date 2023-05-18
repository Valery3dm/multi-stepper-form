import { Schema, model, models, Document, Model } from 'mongoose';

interface IProject extends Document {
  projectName: string;
  projectURL: string;
  projectCategory: string;
  projectDetails: string;
  workers: number;
  productLaunch: string;
  email: string;
}

const ProjectSchema: Schema<IProject> = new Schema({
  projectName: {
    type: String,
    required: [true, 'Project Name Category is required!'],
  },
  projectURL: {
    type: String,
    required: [true, 'Project URL Category is required!'],
  },
  projectCategory: {
    type: String,
    required: [true, 'Project Category is required!'],
  },
  projectDetails: {
    type: String,
    required: [true, 'Project Details is required!'],
  },
  workers: {
    type: Number,
    required: [true, 'Workers is required!'],
  },
  productLaunch: {
    type: String,
    required: [true, 'Product Launch is required!'],
  },
  email: {
    type: String,
    required: [true, 'Email is required!'],
  },
});

const Project: Model<IProject> = models.Project || model<IProject>('Project', ProjectSchema);

export { Project };
