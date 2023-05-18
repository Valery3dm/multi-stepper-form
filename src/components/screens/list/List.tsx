import React from 'react';
import Link from 'next/link';

import ProjectCard from '@/components/ProjectCard/ProjectCard';

import { ListProps } from './List.types';

import styles from './List.module.css';

const List = ({ projects }: ListProps) => {
  return (
    <div className={styles.mainWrapper}>
      <Link href={'/create-project'} className={styles.createBtn}>
        Create New Project
      </Link>
      <ul className={styles.listWrapper}>
        {projects &&
          projects.map((el, idx) => (
            <li key={idx} className={styles.listItem}>
              <ProjectCard {...el} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
