import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
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
  },
  title: {
    flexGrow: 1,
    alignSelf: "center",
    marginLeft: theme.spacing(25),
  },
  search: {
    marginRight: theme.spacing(25),
  },
  searchIcon: {
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
          <Typography className={classes.title} variant="h5" noWrap>
            Faceplant
          </Typography>
          <IconButton
            className={classes.search}
            aria-label="search"
            color="inherit"
          >
            <SearchIcon
              onClick={handleSearchClick}
              style={{ fontSize: "2rem" }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
