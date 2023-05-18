import React from 'react';

import { CustomRadioInputData, FormData } from './CustomRadioInput.types';

import styles from './CustomRadioInput.module.css';

type CustomRadioInputProps = CustomRadioInputData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const CustomRadioInput = ({
  index,
  option,
  selectedItem,
  fieldName,
  updateFields,
}: CustomRadioInputProps) => {
  return (
    <div className={styles.customRadio}>
      <input
        type="radio"
        id={index.toString()}
        name="details"
        value={option}
        onChange={(e) => updateFields({ [fieldName]: e.target.value })}
        checked={selectedItem === option}
      />
      <label className={styles.customRadioLabel} htmlFor={index.toString()}>
        {option}
      </label>
    </div>
  );
};

export default CustomRadioInput;
