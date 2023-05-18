import React from 'react';

import { FormWrapperProps } from './FormWrapper.types';

import styles from './FormWrapper.module.css'

const FormWrapper = ({ title, subtitle, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className={styles.subtitle}>
        {subtitle}
      </h2>
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.formWrapper}>
        {children}
      </div>
    </>
  )
}

export default FormWrapper
