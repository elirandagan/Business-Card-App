import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";
import PortraitIcon from "@mui/icons-material/Portrait";

const Footer = () => {
  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="About" icon={<InfoIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="My Cards" icon={<PortraitIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;