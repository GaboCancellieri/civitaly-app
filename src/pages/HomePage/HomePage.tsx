import { FC } from "react";
import styles from "./HomePage.module.scss";
import { IntroSection, FeaturesSection } from "./components";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "../../components/layout/Footer/Footer";

const HomePage: FC = () => {
  return (
    <div id="home" className={styles.homepageContainer}>
      <IntroSection />
      <FeaturesSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
