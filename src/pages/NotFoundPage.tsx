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
import { ArrowBack as BackIcon, Home as HomeIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3rem",
  },
  topGap: {
    marginTop: "3rem",
  },
  route: {
    backgroundColor: "rgba(128, 128, 128, 0.3)",
    padding: "0.5rem",
    borderRadius: "0.5rem",
  },
  button: {
    margin: "3rem",
  },
}));

// 404 not found error page
const NotFoundPage = (props: RouteComponentProps<{}>): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      className={classes.root}
    >
      <Typography variant="h2" align="center">
        404: Not Found
      </Typography>
      <Typography variant="body1" align="center" className={classes.topGap}>
        <code className={classes.route}>{props.location.pathname}</code> could
        not be found.
      </Typography>
      <ButtonGroup variant="contained" className={classes.topGap}>
        {/* buttons which function as links */}
        <Fab
          onClick={props.history.goBack}
          color="secondary"
          className={classes.button}
          variant="extended"
          size="medium"
          aria-label="add"
        >
          <BackIcon /> Back
        </Fab>
        <Fab
          onClick={() => props.history.push("/")}
          color="primary"
          className={classes.button}
          variant="extended"
          size="medium"
        //   aria-label="add"
        >
          <HomeIcon /> Home
        </Fab>
      </ButtonGroup>
    </Box>
  );
};

export default NotFoundPage;
