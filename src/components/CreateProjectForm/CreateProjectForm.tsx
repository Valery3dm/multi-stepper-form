import React from 'react';

import FormWrapper from '@/common/FormWrapper';
import CustomRadioInput from '@/common/CustomRadioInput';

import { CreateProjectFormProps } from './CreateProjectForm.types';

import styles from './CreateProjectForm.module.css';

const productLaunchData = ['Pre Product', 'Post Product'];

const CreateProjectForm = ({
  workers,
  productLaunch,
  email,
  updateFields,
}: CreateProjectFormProps) => {
  return (
    <FormWrapper
      title="How many full-time workers on project?"
      subtitle="Create Project"
    >
      <div className={styles.counterWrapper}>
        <button
          type="button"
          disabled={workers === 0}
          className={styles.counterBtn}
          onClick={() => updateFields({ workers: workers - 1 })}
        >
          -
        </button>
        <input
          type="number"
          required
          disabled
          className={styles.counterInput}
          value={workers}
        />
        <button
          type="button"
          className={styles.counterBtn}
          onClick={() => updateFields({ workers: workers + 1 })}
        >
          +
        </button>
      </div>

      <h2>Are you pre or post product launch?</h2>
      {productLaunchData.map((el, idx) => (
        <CustomRadioInput
          key={idx}
          index={idx}
          option={el}
          fieldName="productLaunch"
          selectedItem={productLaunch}
          updateFields={updateFields}
        />
      ))}

      <h2 className={styles.emailLabel}>Contact Email</h2>
      <input
        autoFocus
        required
        type="email"
        placeholder='Email'
        value={email}
        className={styles.emailInput}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
    </FormWrapper>
  );
};

export default CreateProjectForm;
