"use client";

import Image from 'next/image';
import React from 'react';

const CookieIcon: React.FC = () => {
  return (
    <span className="cookie-icon inline-block -mb-0.5">
      <Image
        src="/cookie.png"
        alt="Cookie Icon"
        width={17}
        height={17}
        quality={90}
      />
    </span>
  );
};

export default CookieIcon;
