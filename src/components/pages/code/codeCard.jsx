import React from "react";
import Card from "@material-ui/core/Card";

const CodeCard = ({
  title,
  subtitle,
  description,
  color,
  image,
  link,
  linktitle
}) => {
  const styles = {
    card: {
      minHeight: 70,
      minWidth: 450,
      maxWidth: 500
    },
    iconSpan: {
      float: "left",
      height: 105,
      width: 115,
      backgroundColor: color
    },
    textDiv: {
      marginTop: 15
    },
    iconImage: {
      height: "85%",
      width: "90%",
      marginTop: 15,
      marginBottom: 10,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    },
    titleSpan: {
      fontSize: 20,
      padding: 10
    },
    subTitleSpan: {
      fontSize: 17,
      padding: 10,
      color: "gray"
    },
    descSpan: {
      fontSize: 15,
      padding: 10
    }
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
          <span style={styles.descSpan}>
            <a href={link}>{linktitle}</a>
          </span>
        )}
      </div>
    </Card>
  );
};

export default CodeCard;
