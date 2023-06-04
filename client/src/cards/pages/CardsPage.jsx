import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const { pending, error, cards, handleGetCards } = useCards();

  useEffect(() => {
    handleGetCards();
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
