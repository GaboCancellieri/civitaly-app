import { FC } from "react";
import styles from "./FeaturesSection.module.scss";
import { Typography } from "../../../../components/common";
import { FEATURE_ELEMENTS } from "./FeaturesSection.constants";
import FeatureElement from "./FeatureElement";

const FeaturesSection: FC = () => (
  <div id="features" className={styles.featuresContainer}>
    <Typography variant="title">Features</Typography>
    {FEATURE_ELEMENTS.map((feature, index) => (
      <FeatureElement
        key={index}
        index={index}
        title={feature.title}
        description={feature.description}
        imageUrl={feature.imageUrl}
      />
    ))}
  </div>
);

export default FeaturesSection;
