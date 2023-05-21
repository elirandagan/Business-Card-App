import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

const CardDetailsPage = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Card Details"
        subtitle="Here you can find details about your selected card"
      />
      <Typography>Details about card id: {id}</Typography>
    </Container>
  );
};

export default CardDetailsPage;
