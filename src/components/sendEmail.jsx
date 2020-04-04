import React from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function SendEmail() {
  function send(e) {
    console.log("test email");
    // e.preventDefault();
    // emailjs
    //   .sendForm("mailjet", "baconbyte", e.target, "user_ORMrxVi9MVawG7Sjvxr7W")
    //   .then(
    //     result => {
    //       console.log(result.text);
    //     },
    //     error => {
    //       console.log(error.text);
    //     }
    //   );
  }
}
