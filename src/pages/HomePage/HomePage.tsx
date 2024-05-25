import { FC } from "react";
import { Typography } from "../../components/common";

const HomePage: FC = () => {
  return (
    <div>
      <Typography variant="title">HomePage</Typography>
      <Typography variant="text">
        <p>
          This is the home page. You can edit this file to change the content of
          the page.
        </p>
      </Typography>
    </div>
  );
};

export default HomePage;
