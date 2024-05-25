import { FC } from "react";
import styles from "./Error404.module.scss";
import { Link } from "react-router-dom";
import { Typography } from "../../components/common";

const Error404: FC = () => {
  return (
    <div className={styles.errorPageContainer}>
      <img
        className={styles.errorImage}
        src="/img/404.png"
        alt="404 error image"
      />
      <Typography variant="title">Oops! We couldn't find that page.</Typography>
      <Typography variant="text">
        <p>
          Looks like you've hit a broken link or the page doesn't exist anymore.
          Let's get you back on track! You can go back to the{" "}
          <Link to="/">homepage</Link> or try searching for what you need.
        </p>
      </Typography>
    </div>
  );
};

export default Error404;
