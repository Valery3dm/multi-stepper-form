type CreateProjectData = {
  workers: number;
  productLaunch: string;
  email: string;
};

export type CreateProjectFormProps = CreateProjectData & {
  updateFields: (fields: Partial<CreateProjectData>) => void;
};
