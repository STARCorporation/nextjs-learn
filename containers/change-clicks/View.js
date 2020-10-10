import React from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import PaperMui from "@material-ui/core/Paper";

export const ChangeClicksView = ({ counter, addClick, deleteClick }) => {
  return (
    <Wrapper>
      <Container>
        <Button
          variant="contained"
          color="primary"
          onClick={deleteClick}
          disabled={counter === 0}
        >
          Remove
        </Button>
        <Paper elevation={3}>{counter}</Paper>
        <Button variant="contained" color="primary" onClick={addClick}>
          Add
        </Button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
`;
const Paper = styled(PaperMui)`
  padding: 10px 20px;
  margin: 0 20px;
`;
