'use client';
import React from 'react';

import { ProjectCategoryProps } from './ProjectCategory.types';

import styles from './ProjectCategory.module.css';

const projectCategoryOptions = [
  'NFT',
  'GameFi',
  'DeFi',
  'DAO',
  'Ecosystem',
  'Others',
  'SocialFi',
  'Metaverse',
  'Tools',
];

const ProjectCategory = ({
  projectCategory,
  updateFields,
}: ProjectCategoryProps) => {
  return (
    <ul className={styles.listWrapper}>
      {projectCategoryOptions.map((el: string, idx: number) => (
        <li
          key={idx}
          className={
            el === projectCategory ? styles.selectedListItem : styles.listItem
          }
          onClick={(e: React.MouseEvent<HTMLLIElement>) => {
            const selected = (e.target as HTMLLIElement).textContent;
            updateFields({
              projectCategory: selected !== null ? selected : undefined,
            });
          }}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

export default ProjectCategory;
