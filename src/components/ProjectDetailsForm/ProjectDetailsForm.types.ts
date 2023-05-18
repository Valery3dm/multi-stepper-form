type ProjectDetailsData = {
  projectDetails: string;
};

export type ProjectDetailsFormProps = ProjectDetailsData & {
  updateFields: (fields: Partial<ProjectDetailsData>) => void;
};
