import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { func } from "prop-types";

const MoreButton = ({ onClick }) => {
  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <IconButton
        onClick={e => onClick(e.target)}
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "inline-flex", md: "none" } }}>
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

MoreButton.propTypes = {
  onClick: func.isRequired,
};

export default MoreButton;