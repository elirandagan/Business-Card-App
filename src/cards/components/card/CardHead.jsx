import { CardMedia } from "@mui/material";
import React from "react";

const CardHead = ({ image }) => {
  return (
    <>
      <CardMedia
        component="img"
        height="200"
        alt={image.alt}
        image={image.url}
      ></CardMedia>
    </>
  );
};

export default CardHead;
