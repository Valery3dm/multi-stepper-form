import React from 'react';

import FormWrapper from '@/common/FormWrapper';
import CustomRadioInput from '@/common/CustomRadioInput';

import { ProjectDetailsFormProps } from './ProjectDetailsForm.types';

const projectDetailsOptions = [
  'Grow My Community',
  'Activate Existing Members',
  'Understand My Members',
  'Other',
];

const ProjectDetailsForm = ({
  projectDetails,
  updateFields,
}: ProjectDetailsFormProps) => {
  return (
    <FormWrapper
      title="What is your main goal with AlphaQuest"
      subtitle="Project Details"
    >
      {projectDetailsOptions.map((el, idx) => (
        <CustomRadioInput
          key={idx}
          index={idx}
          option={el}
          fieldName="projectDetails"
          selectedItem={projectDetails}
          updateFields={updateFields}
        />
      ))}
    </FormWrapper>
  );
};

export default ProjectDetailsForm;
