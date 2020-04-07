import React from "react";
import MaterialForm from "./common/materialForm";
import Joi from "@hapi/joi";
import emailjs from "emailjs-com";

class EmailForm extends MaterialForm {
  state = {
    data: {
      user_name: "",
      user_email: "",
      message: "",
    },
    genres: [],
    errors: {},
  };

  schema = Joi.object({
    user_name: Joi.string().required().label("Name"),

    user_email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),

    message: Joi.string().required().label("Message"),
  });

  doSubmit = (target) => {
    window.location = "/";
    sendEmail(target);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("user_name", "Name")}
          {this.renderInput("user_email", "Email")}
          {this.renderInput("message", "Message")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

function sendEmail(target) {
  console.log("sent");
  emailjs.sendForm(
    "mailjet",
    "baconbyte",
    target,
    "user_ORMrxVi9MVawG7Sjvxr7W"
  );
}

export default EmailForm;
