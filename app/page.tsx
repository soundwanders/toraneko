// Home.tsx
import React from 'react';
import Hero from '@/components/Hero';
import Header from '@/components/nav/Header';

const Home: React.FC = () => {

  return (
    <div>
      <Header /> 
      <Hero /> 
    </div>
  );
};

export default Home;
