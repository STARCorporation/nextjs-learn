import React from "react";
import { useSelector } from "react-redux";

import { TotalClicksView } from "./View";

export const TotalClicks = () => {
  const { totalClicks } = useSelector((state) => state.counter);

  return <TotalClicksView totalClicks={totalClicks} />;
};
