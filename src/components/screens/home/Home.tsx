import Link from 'next/link';
import React from 'react';

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

type HomeProps = {
  projects: FormData[];
};

const Home = ({ projects }: HomeProps) => {
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

export default Home;
