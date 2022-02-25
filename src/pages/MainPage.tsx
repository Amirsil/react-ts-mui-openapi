import React from "react";
import { RouteComponentProps } from "react-router-dom";

import {
  Button,
  ButtonGroup,
  Typography,
  Box,
  makeStyles,
  Fab,
} from "@material-ui/core";
import { Apps as AppsIcon, Error as ErrorIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3rem",
  },
  buttons: {
    marginTop: "8rem",
  },
  button: {
    margin: "2rem",
  },
}));

// main index page for empty route
const MainPage = (props: RouteComponentProps<{}>): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      className={classes.root}
    >
      <Typography variant="h2" align="center">
        Application
      </Typography>
      <ButtonGroup variant="contained" className={classes.buttons}>
        {/* buttons which function as links */}
        <Fab
          onClick={() => props.history.push("/counter")}
          color="primary"
          className={classes.button}
          variant="extended"
        >
          <AppsIcon />
          Counter App
        </Fab>
        <Fab
          onClick={() => props.history.push("/nonexistent")}
          color="secondary"
          className={classes.button}
          variant="extended"
        >
          <ErrorIcon />
          Test 404 Page
        </Fab>
      </ButtonGroup>
    </Box>
  );
};

export default MainPage;
