import React, { FC, PropsWithChildren, ReactNode } from 'react';
import Head from 'next/head';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="multi-stepper-form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>{children}</main>
    </>
  );
};

export default Layout;
