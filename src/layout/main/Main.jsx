import { node } from "prop-types";
import Paper from "@mui/material/Paper";

const Main = ({ children }) => {
  return (
    <Paper
      sx={{
        minHeight: "90vh",
        backgroundColor: "#e3f2fd",
      }}>
      {children}
    </Paper>
  );
};

Main.propTypes = {
  children: node.isRequired,
};

export default Main;