import React from "react";
import { Box, CardActions, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";

const CardActionBar = ({ cardId, onLike, onDelete, onEdit, userId }) => {
  const { user } = useUser();
  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          {user && (user?._id === userId || user.isAdmin) && (
            <IconButton onClick={() => onDelete(cardId)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          )}
          {user && user?._id === userId && (
            <IconButton onClick={() => onEdit(cardId)} aria-label="edit">
              <EditIcon />
            </IconButton>
          )}
        </Box>
        <Box>
          <IconButton aria-label="call">
            <CallIcon />
          </IconButton>
          <IconButton onClick={() => onLike(cardId)} aria-label="like">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </>
  );
};

CardActionBar.propTypes = {
  cardId: string.isRequired,
  onLike: func.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
};

export default CardActionBar;
