import React from 'react';
import type { NextPage } from 'next';
import { Header } from '../app/patterns/Header';
import { Banner } from '../app/patterns/Banner';

const Home: NextPage = () => {

  return (
    <div>
      <Header />
      <Banner />
    </div>
  )
}

export default Home
