import { ReactElement } from 'react';

export type FormData = {
  stepElement: ReactElement;
  stepName: string;
};

export type DesktopCrumbsProps = {
  currentStepIndex: number;
  steps: FormData[];
};
