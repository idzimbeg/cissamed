import AboutPage from 'AboutPage';
import HomePage from 'HomePage';
import WorkPage from 'WorkPage';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { HeaderTitleLayout } from '../src/Layouts';
import { Navbar } from '../src/Navbar';
import { symbol } from '../src/consts/consts';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CissaMed</title>
        <meta name="description" content="Tourist Medical Office CissaMed Novalja" />
        <link rel="icon" href={symbol.src} />
      </Head>

      <main className="max-w-screen-2xl mx-auto flex flex-col px-10 pt-8 pb-3">
        <Navbar />
        <HeaderTitleLayout className={'border-none'}>
          <section id="/">
            <HomePage />
          </section>
          <section id="work">
            <WorkPage />
          </section>
          <section id="contact">
            <AboutPage />
          </section>
        </HeaderTitleLayout>
      </main>
    </div>
  );
};

export default Home;
