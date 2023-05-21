import React from "react";
import { Card, CardActionArea } from "@mui/material";
import cardType from "../../models/types/cardType";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { func } from "prop-types";

const CardComponent = ({ card, onLike, onDelete, onEdit }) => {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar
        onLike={onLike}
        onDelete={onDelete}
        onEdit={onEdit}
        cardId={card._id}
      />
    </Card>
  );
};

CardComponent.propTypes = {
  card: cardType.isRequired,
  onLike: func.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
};

export default CardComponent;
