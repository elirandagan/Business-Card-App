import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NotLogged = () => {
  return (
    <Box>
      <Button color="inherit">
        <Typography>Signup</Typography>
      </Button>
      <Button color="inherit">
        <Typography>Login</Typography>
      </Button>
    </Box>
  );
};

export default NotLogged;