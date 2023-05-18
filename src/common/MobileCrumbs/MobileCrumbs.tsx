import React from 'react';

import { MobileCrumbsProps } from './MobileCrumbs.types';

import styles from './MobileCrumbs.module.css';

const MobileCrumbs = ({ currentStepIndex, steps }: MobileCrumbsProps) => {
  const renderCurrentStepGen2 = steps.map((_, idx) => {
    switch (true) {
      case idx === currentStepIndex:
        return <div className={styles.currentDot} />;
      case idx < currentStepIndex:
        return (
          <>
            <div className={styles.prevDot} />
            <div className={styles.prevWood} />
          </>
        );
      case idx > currentStepIndex:
        return (
          <>
            <div className={styles.emptyWood} />
            <div className={styles.emptyDot} />
          </>
        );
      default:
        return <div className={styles.currentDot} />;
    }
  });

  return <div className={styles.crumbsWrapper}>{renderCurrentStepGen2}</div>;
};

export default MobileCrumbs;
