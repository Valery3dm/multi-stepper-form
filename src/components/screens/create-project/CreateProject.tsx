import { FormEvent, useState } from 'react';

import AddNewProjectForm from '@/components/AddNewProjectForm/AddNewProjectForm';
import MobileCrumbs from '@/common/MobileCrumbs/MobileCrumbs';
import DesktopCrumbs from '@/common/DesktopCrumbs/DesktopCrumbs';

import { useMultistepForm } from '@/hooks/useMultistepForm';

import { FormData } from './CreateProject.types';

import styles from './CreateProject.module.css';

const INITIAL_DATA: FormData = {
  projectName: '',
  projectURL: '',
  projectCategory: 'Others',
  projectDetails: 'Other',
  workers: 0,
  productLaunch: 'Pre Product',
  email: '',
};

const CreateProject = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      {
        stepElement: (
          <AddNewProjectForm {...data} updateFields={updateFields} />
        ),
        stepName: 'Start First Project',
      },
      // {
      //   stepElement: (
      //     <ProjectDetailsForm {...data} updateFields={updateFields} />
      //   ),
      //   stepName: 'Project Details',
      // },
      // {
      //   stepElement: (
      //     <CreateProjectForm {...data} updateFields={updateFields} />
      //   ),
      //   stepName: 'Create Project',
      // },
    ]);

  const createProject = async () => {
    try {
      const response = await fetch('/api/projects/new', {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        window.location.replace('/list');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isLastStep) return next();
    createProject();
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <MobileCrumbs steps={steps} currentStepIndex={currentStepIndex} />
      <DesktopCrumbs steps={steps} currentStepIndex={currentStepIndex} />
      <div className={styles.stepWrapper}>
        {step}
        <div className={styles.btnWrapper}>
          {!isFirstStep && (
            <button type="button" className={styles.backBtn} onClick={back}>
              Back
            </button>
          )}
          <button type="submit" className={styles.nextBtn}>
            {isLastStep
              ? 'Create Project'
              : isFirstStep
              ? 'Add Project'
              : 'Continue'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateProject;
