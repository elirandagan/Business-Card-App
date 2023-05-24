import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import { useEffect } from "react";
import { getCards } from "../services/cardService";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

const CardsPage = () => {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    getCards()
      .then((data) => {
        setPending(false);
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
        setPending(false);
        setError(error);
      });
  }, []);

  return (
    <Container>
      <PageHeader
        title="Cards Page"
        subtitle="On this page you can find all business cards from all categories"
      />
      {pending && <Spinner />}
      {error && <Error errorMessage={error} />}
      {cards && !cards.length && (
        <Typography>Oops.. there are not cards at all!</Typography>
      )}
      {cards && !!cards.length && <Cards cards={cards} />}
    </Container>
  );
};

export default CardsPage;
