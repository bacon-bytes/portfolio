import React from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex"
    }
  }
}));

export default function SendEmail() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("mailjet", "baconbyte", e.target, "user_ORMrxVi9MVawG7Sjvxr7W")
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  const styles = {
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };

  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={sendEmail}>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="user_email"
      />
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="user_name"
      />
      <TextField
        id="outlined-basic"
        label="Message"
        variant="outlined"
        name="message"
      />
      <div style={styles.button}>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          value="Send"
        >
          Send
        </Button>
      </div>
    </form>
  );
}
