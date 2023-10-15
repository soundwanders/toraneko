"use client";

import Image from 'next/image';
import React from 'react';

const BurgerIcon: React.FC = () => {
  return (
    <span className="burger-icon inline-block">
      <Image
        src="/burger.png"
        alt="Burger Icon"
        width={20}
        height={20}
        quality={95}
      />
    </span>
  );
};

export default BurgerIcon;
