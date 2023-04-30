import React from "react";
import { Box, CardActions, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardActionBar = ({cardId}) => {
  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton aria-label="call">
            <CallIcon />
          </IconButton>
          <IconButton aria-label="like">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </>
  );
};

export default CardActionBar;
