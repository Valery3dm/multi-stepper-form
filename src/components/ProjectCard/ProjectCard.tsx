import React from 'react';

import { ProjectCardProps } from './ProjectCard.types';

import styles from './ProjectCard.module.css';

const ProjectCard = ({
  email,
  productLaunch,
  projectCategory,
  projectDetails,
  projectName,
  projectURL,
  workers,
}: ProjectCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <h2>{projectName}</h2>
      <div>
        <div>Contact email:</div>
        <div>{email}</div>
      </div>
      <div>Product Launch: {productLaunch}</div>
      <div>Project category: {projectCategory}</div>
      <div>Details: {projectDetails}</div>
      <a href={projectURL}>{projectURL}</a>
      <div>Workers: {workers}</div>
    </div>
  );
};

export default ProjectCard;
