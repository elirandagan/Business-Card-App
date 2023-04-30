import React from "react";
import { Card, CardActionArea } from "@mui/material";

import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

const CardComponent = ({card}) => {

  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar cardId={card._id} />
    </Card>
  );
};

export default CardComponent;
