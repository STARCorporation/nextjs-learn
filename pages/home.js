import { ChangeClicks, TotalClicks } from "../containers";

const HomePage = () => {
  return (
    <React.Fragment>
      <TotalClicks />
      <ChangeClicks />
    </React.Fragment>
  );
};

export default HomePage;
