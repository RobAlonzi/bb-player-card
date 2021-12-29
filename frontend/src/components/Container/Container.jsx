import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Search from "./Search";
import URLS from "@/views/urls";

function AppContainer({ children }) {
  const navigate = useNavigate();

  function handlePlayerSearch(option) {
    navigate(`/${URLS.PLAYERS}/${option.id}`);
  }

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "black.main" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Rob Alonzi - Boston Bruins Assignment
          </Typography>
          <Search onPlayerSearch={handlePlayerSearch} />
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

export default AppContainer;
