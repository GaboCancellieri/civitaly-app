import { FC } from "react";
import styles from "./Footer.module.scss";
import { Button, Icon, Image, Typography } from "../../common";
import logo from "../../../assets/images/NavBar/logoNavBar.png";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Image
            className={styles.logoImage}
            src={logo}
            alt="Civitaly Logo"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <nav className={styles.footerNav}>
          <a href="#top" className={styles.footerLink}>
            <Icon iconDesign="FontAwesome5" iconId="FaArrowUp" />{" "}
            <Typography variant="text">Top</Typography>
          </a>
          <a href="#features" className={styles.footerLink}>
            <Icon iconDesign="FontAwesome5" iconId="FaStar" />{" "}
            <Typography variant="text">Features</Typography>
          </a>
          <a href="#testimonials" className={styles.footerLink}>
            <Icon iconDesign="FontAwesome5" iconId="FaUsers" />{" "}
            <Typography variant="text">Testimonials</Typography>
          </a>
        </nav>
        <Button type="terciary" onClick={() => {}}>
          <Typography variant="darkButtonText">JOIN NOW</Typography>
        </Button>
      </div>
      <div className={styles.footerBottom}>
        <Typography variant="text">
          <p>&copy; 2024 Civitaly. All rights reserved.</p>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
