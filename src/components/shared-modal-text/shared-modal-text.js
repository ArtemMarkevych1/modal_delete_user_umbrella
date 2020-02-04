import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sharedModalText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "189%",
    color: "#2D3054",
    display: "flex",
    justifyContent: "center"
  }
});

const SharedModalText = () => {
  const classes = useStyles();

  return <span className={classes.sharedModalText}>Delete This User?</span>;
};

export default SharedModalText;
