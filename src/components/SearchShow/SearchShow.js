import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchInput: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
  },
  SearchShowContainer: {
    border: "1px solid lightgray",
    paddingBottom: "20px",
    borderRadius: "4px",
  },
}));

export const SearchShow = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.SearchShowContainer} maxWidth="xl">
        <div className={classes.searchInput}>
          <SearchIcon />
          <Input
            fullWidth
            disableUnderline={false}
            placeholder="Search..."
            inputProps={{ "aria-label": "description" }}
          />
        </div>
      </Container>
    </div>
  );
};
