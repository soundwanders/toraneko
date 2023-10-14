import NextImage, { ImageProps } from 'next/image';

interface SplineImageProps extends ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality: number;
}

const SplineImage: React.FC<SplineImageProps> = ({ src, alt, width, height, quality }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
    />
  );
};

export default SplineImage;
