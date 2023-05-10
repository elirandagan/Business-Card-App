import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const LeftNavBar = () => {
  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <Button color="inherit">
          <Typography>About</Typography>
        </Button>
        <Button color="inherit">
          <Typography>My Cards</Typography>
        </Button>
        <Button color="inherit">
          <Typography>Fav Cards</Typography>
        </Button>
        <Button color="inherit">
          <Typography>Sandbox</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default LeftNavBar;