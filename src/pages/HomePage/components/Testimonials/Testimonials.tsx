import { FC } from "react";
import { Typography } from "../../../../components/common";
import styles from "./Testimonials.module.scss";

const Testimonials: FC = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <Typography variant="title">What Our Users Say</Typography>
      <Typography variant="subtitle">
        <p>Hear from our satisfied community members.</p>
      </Typography>
      <div className={styles.testimonialCardContainer}>
        <div className={styles.testimonialCard}>
          <Typography variant="text">
            <blockquote>
              <p className={styles.testimonialText}>
                "Civitaly has completely transformed the way I connect with
                people. The language practice feature is amazing, and I’ve made
                friends from all over the world!"
              </p>
              <cite className={styles.testimonialAuthor}>- Maria S.</cite>
            </blockquote>
          </Typography>
        </div>
        <div className={styles.testimonialCard}>
          <Typography variant="text">
            <blockquote>
              <p className={styles.testimonialText}>
                "I love the verified user feature. It gives me peace of mind
                knowing that I’m talking to real people. Civitaly is my go-to
                platform for cultural exchange."
              </p>
              <cite className={styles.testimonialAuthor}>- John D.</cite>
            </blockquote>
          </Typography>
        </div>
        <div className={styles.testimonialCard}>
          <Typography variant="text">
            <blockquote>
              <p className={styles.testimonialText}>
                "Joining Civitaly was the best decision I made. It’s more than
                just a social network; it’s a community where I can learn,
                share, and grow every day."
              </p>
              <cite className={styles.testimonialAuthor}>- Elena K.</cite>
            </blockquote>
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
