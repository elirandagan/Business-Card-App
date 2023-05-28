import { Container} from "@mui/material";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import { getCards } from "../services/cardService";
import CardsFeedback from "../components/CardsFeedback";

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
      <CardsFeedback
        cards={cards}
        error={error}
        pending={pending}
        onDelete={() => {}}
      />
    </Container>
  );
};

export default CardsPage;
