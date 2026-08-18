import NextImage, { ImageProps } from 'next/image';

interface RoomImageProps extends ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality: number;
}

const RoomImage: React.FC<RoomImageProps> = ({ src, alt, width, height, quality, ...rest }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      {...rest}
    />
  );
};

export default RoomImage;
