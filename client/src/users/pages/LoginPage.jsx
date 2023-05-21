import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";

const LoginPage = () => {
  const user = null;
    // const user  = true;

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Login Page"
        subtitle="In order to login, fill out the form and click the login button."
      />
    </Container>
  );
};

export default LoginPage;
