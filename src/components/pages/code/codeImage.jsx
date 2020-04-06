import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 190
  }
});

const CodeImage = ({ color, link }) => {
  const styles = {
    card: {
      height: 210,
      width: 210,
      backgroundColor: color
    }
  };
  const classes = useStyles();

  return (
    <Card style={styles.card}>
      <CardMedia className={classes.media} image={link} title="" />
    </Card>
  );
};

export default CodeImage;
