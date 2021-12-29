import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "@/views/Dashboard";
import Player from "@/views/Player";

import URLS from "./urls";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path={`${URLS.PLAYERS}/:id`} element={<Player />} />
    </Routes>
  );
}

export default AppRoutes;
