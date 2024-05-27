import { FC } from "react";
import styles from "./IntroSection.module.scss";
import { Button, Typography, Image } from "../../../../components/common";

const IntroSection: FC = () => (
  <div className={styles.imageContainer}>
    <Image
      src="/img/landing.png"
      alt="Civitaly Landing Image"
      className={styles.image}
      width="2000px"
    />
    <div className={styles.mainText}>
      <Typography className={styles.title} variant="largeTitle">
        CIVITALY
      </Typography>
      <Typography className={styles.subtitle} variant="text">
        <p>Connecting the world through culture and language exchange.</p>
      </Typography>
      <Button type="secondary" onClick={() => {}}>
        <Typography variant="darkButtonText">JOIN NOW</Typography>
      </Button>
    </div>
  </div>
);

export default IntroSection;
