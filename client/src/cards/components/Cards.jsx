import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardComponent from "./card/Card";
import { arrayOf } from "prop-types";
import cardType from "../models/types/cardType";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "./CardsFeedback";
import { getCards } from "../services/cardService";

const Cards = ({cards}) => {
  // const [cards, setCards] = useState(null);
  // const [error, setError] = useState(null);
  // const [pending, setPending] = useState(false);

  const onLike = (cardId) => console.log(`you liked card no:${cardId}`);
  const onDelete = (cardId) => console.log(`you deleted card no:${cardId}`);
  const onEdit = (cardId) => console.log(`you edited card no:${cardId}`);

  // useEffect(() => {
  //   setPending(true);
  //   getCards()
  //     .then((data) => {
  //       setPending(false);
  //       setCards(data);
  //     })
  //     .catch((error) => {
  //       setPending(false);
  //       setError(error);
  //     });
  // }, []);

  return (
    // <Container>
    //   <PageHeader title="Cards" subtitle="here you can find all the cards" />
    //   <CardsFeedback
    //     pending={pending}
    //     error={error}
    //     cards={cards}
    //     onDelete={onDelete}
    //   />
    // </Container>
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            onLike={onLike}
            onDelete={onDelete}
            onEdit={onEdit}
            card={card}
          />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  cards: arrayOf(cardType).isRequired,
};

export default Cards;
