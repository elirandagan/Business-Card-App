import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";

const CardsPage = () => {
  const cards = [
    {
      _id: "63765801e20ed868a69a62c4a",
      title: "first",
      subtitle: "subtitle",
      description: "testing 123",
      phone: "050-1111111",
      email: "test@gmail.com",
      web: "https://www.test.co.il",
      image: {
        url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
        alt: "Business card image",
      },
      address: {
        state: "",
        country: "country",
        city: "tel aviv",
        street: "shinkin",
        houseNumber: 3,
        zip: 1234,
      },
      bizNumber: 1_000_000,
      user_id: "63765801e20ed868a69a62c2",
      createdAt: new Date().toLocaleDateString(),
      likes: ["43"],
    },
    {
      _id: "63765801e20ed868a69a62c4b",
      title: "second",
      subtitle: "subtitle",
      description: "testing 123",
      phone: "050-2222222",
      email: "test@gmail.com",
      web: "https://www.test.co.il",
      image: {
        url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
        alt: "Business card image",
      },
      address: {
        state: "",
        country: "country",
        city: "tel aviv",
        street: "shinkin",
        houseNumber: 3,
        zip: 1234,
      },
      bizNumber: 1_000_001,
      user_id: "63765801e20ed868a69a62c2",
      createdAt: new Date().toLocaleDateString(),
      likes: ["100"],
    },
    {
      _id: "63765801e20ed868a69a62c4f",
      title: "third",
      subtitle: "subtitle",
      description: "testing 123",
      phone: "050-3333333",
      email: "test@gmail.com",
      web: "https://www.test.co.il",
      image: {
        url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
        alt: "Business card image",
      },
      address: {
        state: "",
        country: "country",
        city: "tel aviv",
        street: "shinkin",
        houseNumber: 3,
        zip: 1234,
      },
      bizNumber: 1_000_002,
      user_id: "63765801e20ed868a69a62c2",
      createdAt: new Date().toLocaleDateString(),
      likes: ["74"],
    },
  ];
  return (
    <Container >
      <PageHeader
        title="Cards Page"
        subtitle="On this page you can find all business cards from all categories"
      />
      <Cards cards={cards} />
    </Container>
  );
};

export default CardsPage;
