import React from 'react';

import Link from 'next/link';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.greetingContent}>
      <div className={styles.greetingText}>
        <h3 className={styles.greetingTitle}>Hello there!</h3>
      </div>
      <div className={styles.greetingText}>
        This project is built with Next.js pages and has several routes
        configured for publishing and retrieving projects from MongoDB. CSS and
        CSS modules were used for styling.
      </div>
      <div className={styles.greetingText}>
        The project includes a useful custom hook that allows for easily adding
        forms to a stepper without the need to modify or add UI for displaying
        different numbers of forms.. This hook provides a convenient way to
        handle the state and navigation logic for a multistep form. It can be
        used in a functional component to simplify the implementation of a
        stepper-based form flow.
      </div>
      <Link href={'/list'} className={styles.greetingBtn}>
        Let's go
      </Link>
    </div>
  );
};

export default Home;
