import React from 'react';

import ProjectCategory from './ProjectCategory';
import FormWrapper from '@/common/FormWrapper';

import { AddNewProjectFormProps } from './AddNewProjectForm.types';

const AddNewProjectForm = ({
  projectName,
  projectURL,
  projectCategory,
  updateFields,
}: AddNewProjectFormProps) => {
  return (
    <FormWrapper
      title="Add New Project"
      subtitle="To Create Quest you need firstly create Project"
    >
      <label>Project Name (It can be changed later)</label>
      <input
        autoFocus
        required
        type="text"
        value={projectName}
        placeholder="Project Name"
        onChange={(e) => updateFields({ projectName: e.target.value })}
      />
      <label>
        Project URL <div>(It cannot be changed after creation)</div>
      </label>
      <input
        required
        type="text"
        value={projectURL}
        placeholder="Project URL"
        onChange={(e) => updateFields({ projectURL: e.target.value })}
      />
      <label>
        Project Category <div>(It cannot be changed after creation)</div>
      </label>
      <ProjectCategory
        projectCategory={projectCategory}
        updateFields={updateFields}
      />
    </FormWrapper>
  );
};

export default AddNewProjectForm;
