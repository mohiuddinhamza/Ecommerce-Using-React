import React from 'react'
import Carousel from '../components/carousel'
import MainBanner from '../components/MainBanner';
import Feature from '../components/feature';

export default function Home() {
  return (
    <div>
      <Carousel />
      <MainBanner />
      <Feature /> 
    </div>
  );
}
