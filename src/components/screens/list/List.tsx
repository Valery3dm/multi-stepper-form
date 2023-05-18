import React from 'react';
import Link from 'next/link';

import styles from './Home.module.css';

type FormData = {
  _id: string;
  projectName: string;
  projectURL: string;
  projectCategory: string;
  projectDetails: string;
  workers: number;
  productLaunch: string;
  email: string;
};

type ListProps = {
  projects: FormData[];
};

const List = ({ projects }: ListProps) => {
  return (
    <div>
      <ul>
        {projects &&
          projects.map((project, idx) => (
            <li style={{ color: 'white' }} key={idx}>
              {project._id}
            </li>
          ))}
      </ul>
      <Link href={'/test'}>Test</Link>
    </div>
  );
};

export default List;
