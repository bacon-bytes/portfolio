import React from "react";
import Card from "@material-ui/core/Card";
import "./code.css";

const CodeCard = ({
  title,
  subtitle,
  description,
  color,
  image,
  link,
  linktitle,
}) => {
  const styles = {
    card: {
      minHeight: 70,
      minWidth: 350,
    },
    iconSpan: {
      float: "left",
      height: 210,
      width: 150,
      backgroundColor: color,
    },
    textDiv: {
      marginTop: 60,
    },
    iconImage: {
      // height: "50%",
      height: 120,
      // width: "90%",
      width: 120,
      marginTop: 40,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    titleSpan: {
      fontSize: 20,
      padding: 10,
    },
    subTitleSpan: {
      fontSize: 17,
      padding: 10,
      color: "gray",
    },
    descSpan: {
      fontSize: 15,
      padding: 10,
    },
    a: {
      color: "#000000",
    },
  };
  return (
    <Card style={styles.card}>
      <span style={styles.iconSpan}>
        <span style={styles.iconImage}>
          <img src={image} style={styles.iconImage} />
        </span>
      </span>
      <div style={styles.textDiv}>
        <span style={styles.titleSpan}>{title}</span>
        {subtitle && <br />}
        {subtitle && <span style={styles.subTitleSpan}>{subtitle}</span>}
        <br />
        <span style={styles.descSpan}>{description}</span>
        {link && <br />}
        {link && (
          <span style={styles.descSpan} class="linkClass">
            <a href={link}>{linktitle}</a>
          </span>
        )}
      </div>
    </Card>
  );
};

export default CodeCard;
