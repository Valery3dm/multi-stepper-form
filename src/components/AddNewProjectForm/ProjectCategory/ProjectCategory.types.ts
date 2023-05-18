type ProjectCategoryData = {
  projectCategory: string;
};

export type ProjectCategoryProps = ProjectCategoryData & {
  updateFields: (fields: Partial<ProjectCategoryData>) => void;
};
