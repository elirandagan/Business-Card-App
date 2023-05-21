import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";

const NotLogged = () => {
  return (
    <Box>
      {/* <Button color="inherit">
        <Typography>Signup</Typography>
      </Button> */}
      <NavItem label="signup" to={ROUTES.SIGNUP}></NavItem>
      <Button color="inherit">
        <Typography>Login</Typography>
      </Button>
    </Box>
  );
};

export default NotLogged;
