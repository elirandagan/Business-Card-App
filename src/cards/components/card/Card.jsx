import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardComponent = () => {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 350 }}>
      <CardActionArea>
        {/*header*/}
        <CardMedia
          component="img"
          height="200"
          alt="Card Image"
          image="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"
        ></CardMedia>
        {/*body - content*/}
        <CardContent>
          <CardHeader title="Title" subheader="subtitle" sx={{ p: 0, mb: 1 }} />
          <Divider />
          <Box mt={1}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: "flex", gap: 1 }}
            >
              <Typography fontWeight={700} component="span">
                phone:
              </Typography>
              <Typography component="span">050-5555555</Typography>
            </Typography>
            <Typography sx={{ display: "flex", gap: 1 }} variant="body2" color="text.secondary">
              <Typography fontWeight={700} component="span">
                Adress:
              </Typography>
              <Typography component="span">HackerU, Ramat-Gan</Typography>
            </Typography>
            <Typography sx={{ display: "flex", gap: 1 }} variant="body2" color="text.secondary">
              <Typography fontWeight={700} component="span">
                Card Number:
              </Typography>
              <Typography component="span">5555555</Typography>
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      {/*action bar - footer*/}
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
    </Card>
  );
};

export default CardComponent;
