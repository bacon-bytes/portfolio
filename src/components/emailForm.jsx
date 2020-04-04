import React, { Component } from "react";
import MaterialForm from "./common/materialForm";
import Joi from "@hapi/joi";

class EmailForm extends MaterialForm {
  state = {
    data: {
      name: "",
      email: "",
      message: ""
    },
    genres: [],
    errors: {}
  };

  schema = Joi.object({
    name: Joi.string()
      .required()
      .label("Name"),

    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),

    message: Joi.string()
      .required()
      .label("Message")
  });

  doSubmit = async () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("message", "Message")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default EmailForm;
