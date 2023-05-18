type AddNewProjectData = {
  projectName: string;
  projectURL: string;
  projectCategory: string;
};

export type AddNewProjectFormProps = AddNewProjectData & {
  updateFields: (fields: Partial<AddNewProjectData>) => void;
};
