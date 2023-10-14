"use client";

import React from 'react';

const BurgerIcon: React.FC = () => {
  return (
    <span className="burger-icon inline-block">
      <img
        src="/burger.png"
        alt="Burger Icon"
        width={18}
        height={18}
      />
    </span>
  );
};

export default BurgerIcon;
