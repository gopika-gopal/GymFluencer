// src/Home.jsx
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HeroImage from './HeroImage';
import GridText from './GridText';
import GridImage from './GridImage';
import AboutSection from './AboutSection';
import AboutText from './AboutText';
import RoutinesPage from './RoutinesPage';
import NewsLetter from './NewsLetter';
import BoxGrid from './BoxGrid';
import Tools from './Tools';
import GymFluencer from './GymFluencer';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HeroImage />
      <GridText />
      <RoutinesPage />
      <GridImage />
      <BoxGrid />
      <Tools />
      <AboutSection />
      <AboutText />
      <NewsLetter />
      <GymFluencer />
    </>
  );
};

export default Home;
