import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Image from "../../assets/game-bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hero: {
    backgroundColor: "#2EC4B6",
    height: "425px",
  },
  heroHeader: {
    fontWeight: "bold",
    paddingTop: theme.spacing(15),
    color: "#FBFBFF",
  },

  heroText: {
    color: "#FBFBFF",
    marginBottom: theme.spacing(5),
  },

  heroSearch: {
    backgroundColor: "#FBFBFF",
    borderRadius: "6px",
    marginRight: theme.spacing(1),
  },
  heroBtn: {
    backgroundColor: "#204B57",
    color: "white",
  },
  search: {
    display: "flex",
  },
}));

export const Searchbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.hero}>
        <Typography className={classes.heroHeader} variant="h3" noWrap>
          Welcome to Faceplant
        </Typography>
        <Typography className={classes.heroText} variant="h4" noWrap>
          Discover games. Explore now.
        </Typography>
        <div className={classes.search}>
          <TextField
            className={classes.heroSearch}
            id="outlined-secondary"
            placeholder="Search games"
            variant="outlined"
            fullWidth
          />
          <Button className={classes.heroBtn} variant="contained">
            SEARCH
          </Button>
        </div>
      </Container>
    </div>
  );
};
