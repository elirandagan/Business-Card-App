import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../menu/MenuProvider";
import { useUser } from "../../../../users/providers/UserProvider";

const Logged = ({ onClick }) => {
  const { user } = useUser();
  console.log(user);
  const title = `Open Settings: ${user.name.first} ${user.name.last}`;
  const setIsOpen = useMenu();
  return (
    <Tooltip title={title}>
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={() => setIsOpen(true)}
      >
        <Avatar alt="Bird" src="/assets/images/avatar.png" />
      </IconButton>
    </Tooltip>
  );
};

export default Logged;
