import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import {
  ButtonGroup,
  Button,
  Typography,
  TextField,
  Box,
  Grid,
  makeStyles,
  Fab,
} from "@material-ui/core";

import { useAppSelector, useAppDispatch } from "../state/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../state/counterSlice";

const useStyles = makeStyles((_theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3rem",
  },
  button404: {
    textDecoration: "none",
    marginTop: "3rem",
  },
  numInput: {
    marginTop: "2rem",
    marginBottom: "1rem",
  },
  fullWidth: {
    width: "100%",
  },
  regularButton: {
    margin: "3rem",
  },
}));

// Simple counter app to demo a page connected to state slice
const CounterPage = (props: RouteComponentProps<{}>): JSX.Element => {
  const classes = useStyles();

  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Box className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={1}>
          <Fab
            onClick={() => dispatch(decrement())}
            className={classes.fullWidth}
            color="secondary"
            variant="extended"
          >
            -
          </Fab>
        </Grid>
        <Grid item xs={3}>
          <Typography align="center" variant="h1">
            {count}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Fab
            onClick={() => dispatch(increment())}
            className={classes.fullWidth}
            color="primary"
            variant="extended"
          >
            +
          </Fab>
        </Grid>
      </Grid>

      <TextField
        value={incrementAmount}
        onChange={(event) => setIncrementAmount(event.target.value)}
        variant="outlined"
        className={classes.numInput}
      />
      <Box mt={6}>
        <ButtonGroup variant="contained">
          <Fab
            variant="extended"
            className={classes.regularButton}
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </Fab>
          <Fab
            variant="extended"
            className={classes.regularButton}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </Fab>
          <Fab
            variant="extended"
            className={classes.regularButton}
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </Fab>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default CounterPage;
