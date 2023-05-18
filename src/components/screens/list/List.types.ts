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

export type ListProps = {
  projects: FormData[];
};
