import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hero: {},
}));

export const Searchbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.hero}>
        <h1>Searchbar</h1>
      </Container>
    </div>
  );
};
