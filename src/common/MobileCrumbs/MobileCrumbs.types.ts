import { ReactElement } from 'react';

export type FormData = {
  stepElement: ReactElement;
  stepName: string;
};

export type MobileCrumbsProps = {
  currentStepIndex: number;
  steps: FormData[];
};
