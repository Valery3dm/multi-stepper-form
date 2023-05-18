import React from 'react';

import Link from 'next/link';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.greetingContent}>
      <div className={styles.greetingText}>SOME TEXT</div>
      <Link href={'/list'} className={styles.greetingBtn}>
        Let's go
      </Link>
    </div>
  );
};

export default Home;
