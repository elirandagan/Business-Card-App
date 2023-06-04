import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import CardComponent from "../components/card/Card";
import useCards from "../hooks/useCards";
import CardFeedback from "../components/card/CardFeedback";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

const CardDetailsPage = () => {
  const { id } = useParams();
  const { pending, error, card, handleGetCard } = useCards();
  const subTitle = `Here you can find details about your selected card number:${id}`;

  const onLike = (cardId) => console.log(`you liked card no:${cardId}`);
  const onDelete = (cardId) => console.log(`you deleted card no:${cardId}`);
  const onEdit = (cardId) => console.log(`you edited card no:${cardId}`);

  useEffect(() => {
    handleGetCard(id);
  }, []);
  
  return (
    <Container maxWidth="lg">
      <PageHeader title="Card Details" subtitle={subTitle} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {pending && <Spinner />}
        {error && <Error errorMessage={error} />}
        <CardComponent
          card={card}
          onEdit={onEdit}
          onLike={onLike}
          onDelete={onDelete}
        /> */}
        <CardFeedback
          onEdit={onEdit}
          onLike={onLike}
          onDelete={onDelete}
          pending={pending}
          card={card}
          error={error}
        />
      </Container>
    </Container>
  );
};

export default CardDetailsPage;
