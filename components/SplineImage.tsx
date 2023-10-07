import React from 'react';
import NextImage, { ImageProps } from 'next/image';

interface SplineImageProps extends ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const SplineImage: React.FC<SplineImageProps> = ({ src, alt, width, height }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default SplineImage;
