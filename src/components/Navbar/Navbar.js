import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { SearchShow } from "../SearchShow/SearchShow";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
  },
  menuButton: {
    marginRight: theme.spacing(25),
  },
  toolbar: {
    alignItems: "center",
    backgroundColor: "#204B57",
  },
  title: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    alignSelf: "center",
    marginLeft: theme.spacing(25),
    backgroundImage:
      "linear-gradient(90deg, rgba(253,231,76,1) 0%, rgba(46,196,182,1) 67%)",
    fontFamily: "Dela Gothic One, cursive",
    fontStyle: "italic",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
  },
  titleDash: {
    marginLeft: theme.spacing(1),
    background:
      "linear-gradient(90deg, rgba(253,231,76,1) 0%, rgba(46,196,182,1) 67%)",
    height: "20px",
    width: "80px",
    borderRadius: "10px",
  },
  search: {
    marginRight: theme.spacing(25),
  },
  searchIcon: {
    color: "#FBFBFF",
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
      <AppBar className={classes.appBar} position="static">
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
            {!searchClick ? (
              <SearchIcon
                onClick={handleSearchClick}
                className={classes.searchIcon}
              />
            ) : (
              <CloseIcon
                className={classes.searchIcon}
                onClick={handleSearchClick}
              />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      {searchClick ? <SearchShow /> : null}
    </div>
  );
};
