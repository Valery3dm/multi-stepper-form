import React from 'react';

import { DesktopCrumbsProps } from './DesktopCrumbs.types';

import styles from './DesktopCrumbs.module.css';

const DesktopCrumbs = ({ currentStepIndex, steps }: DesktopCrumbsProps) => {
  const renderCurrentStepGen2 = steps.map((el, idx) => {
    switch (true) {
      case idx === currentStepIndex:
        return (
          <div className={styles.dotContent}>
            <div className={styles.currentDot} />
            <div className={styles.currentDotText}>{el.stepName}</div>
          </div>
        );
      case idx < currentStepIndex:
        return (
          <>
            <div className={styles.dotContent}>
              <div className={styles.prevDot} />
              <div className={styles.prevDotText}>{el.stepName}</div>
            </div>
            <div className={styles.prevWood} />
          </>
        );
      case idx > currentStepIndex:
        return (
          <>
            <div className={styles.emptyWood} />
            <div className={styles.dotContent}>
              <div className={styles.emptyDot} />
              <div className={styles.emptyDotText}>{el.stepName}</div>
            </div>
          </>
        );
      default:
        return <div className={styles.currentDot} />;
    }
  });
  return (
    <aside className={styles.crumbsWrapper}>
      {renderCurrentStepGen2}
      <div className={styles.gradientWrapper} />
    </aside>
  );
};

export default DesktopCrumbs;
