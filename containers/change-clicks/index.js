import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ChangeClicksView } from "./View";
import {
  addClickAction,
  deleteClickAction,
  addTotalClickAction,
} from "../../actions/counter";

export const ChangeClicks = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);

  const addClick = () => {
    dispatch(addTotalClickAction());

    dispatch(addClickAction());
  };

  const deleteClick = () => {
    dispatch(addTotalClickAction());

    if (counter !== 0) {
      dispatch(deleteClickAction());
    }
  };

  return (
    <ChangeClicksView
      counter={counter}
      addClick={addClick}
      deleteClick={deleteClick}
    />
  );
};
