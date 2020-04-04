import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const Input = ({ name, label, error, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        {...rest}
        id="outlined-basic"
        label={label}
        variant="outlined"
        name={name}
        helperText={error}
      />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex"
    }
  }
}));

export default Input;
