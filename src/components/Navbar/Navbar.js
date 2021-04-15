import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { SearchShow } from "../SearchShow/SearchShow";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(25),
  },
  toolbar: {
    alignItems: "center",
    color: "#479AD1",
  },
  title: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    alignSelf: "center",
    marginLeft: theme.spacing(25),
    color: "white",
    fontFamily: "Dela Gothic One, cursive",
    fontStyle: "italic",
  },
  titleDash: {
    marginLeft: theme.spacing(1),
    background:
      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(208,237,241,1) 0%, rgba(71,154,209,1) 50%)",
    height: "20px",
    width: "80px",
    borderRadius: "10px",
  },
  search: {
    marginRight: theme.spacing(25),
  },
  searchIcon: {
    color: "#D0EDF1",
    fontSize: "2rem",
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [searchClick, setSearchClick] = useState(false);

  const handleSearchClick = () => {
    setSearchClick(!searchClick);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h4" noWrap>
            FP
            <div className={classes.titleDash}></div>
          </Typography>
          <IconButton
            className={classes.search}
            aria-label="search"
            color="inherit"
          >
            <SearchIcon
              onClick={handleSearchClick}
              className={classes.searchIcon}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      {searchClick ? <SearchShow /> : null}
    </div>
  );
};
