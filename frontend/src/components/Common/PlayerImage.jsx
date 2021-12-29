import React from "react";
import { COLORS } from "@/styles/colors";

function PlayerImage({ playerId }) {
  const URL = `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${playerId}.jpg`;

  return (
    <img
      style={{ border: `2px solid ${COLORS.GOLD}`, height: 135 }}
      src={URL}
      loading="lazy"
      alt={`player ${playerId}`}
    />
  );
}

export default PlayerImage;
