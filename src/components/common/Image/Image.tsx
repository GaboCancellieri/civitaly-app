import { FC, ImgHTMLAttributes, useState } from "react";

const FALLBACK_IMAGE_URL = "/img/fallbackImage.webp";

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

const Image: FC<ImageProps> = ({ className, src, alt, width, height }) => {
  const [url, setUrl] = useState(src);

  const handleError = () => {
    setUrl(FALLBACK_IMAGE_URL);
  };

  return (
    <img
      className={className}
      src={url}
      alt={alt}
      onError={handleError}
      width={width}
      height={height}
    />
  );
};

export default Image;
