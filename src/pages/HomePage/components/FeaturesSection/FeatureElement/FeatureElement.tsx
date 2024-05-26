import { FC } from "react";
import styles from "./FeatureElement.module.scss";
import { Typography, Image } from "../../../../../components/common";

interface FeatureElementProps {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
}

const FeatureElement: FC<FeatureElementProps> = ({
  index,
  title,
  description,
  imageUrl,
}) => {
  const isEven = index % 2 === 0;
  return isEven ? (
    <div className={styles.feature}>
      <div className={styles.featureImage}>
        <Image src={imageUrl} alt={title} width={300} />
      </div>
      <div className={styles.featureText}>
        <Typography variant="smallTitle">{title}</Typography>
        <Typography variant="text">
          <p>{description}</p>
        </Typography>
      </div>
    </div>
  ) : (
    <div className={styles.feature}>
      <div className={styles.featureText}>
        <Typography variant="smallTitle">{title}</Typography>
        <Typography variant="text">
          <p>{description}</p>
        </Typography>
      </div>
      <div className={styles.featureImage}>
        <Image src={imageUrl} alt={title} width={300} />
      </div>
    </div>
  );
};

export default FeatureElement;
