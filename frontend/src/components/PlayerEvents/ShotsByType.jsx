import React from "react";
import Box from "@mui/material/Box";
import { ResponsiveRadar } from "@nivo/radar";

import { groupShotsByType } from "./util";

function ShotsByType({ playerId, events }) {
  const data = groupShotsByType(events, playerId);
  return (
    <Box height={300}>
      <ResponsiveRadar
        data={data}
        keys={["Shots", "Goals"]}
        indexBy="type"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: "color" }}
        gridLevels={6}
        gridLabelOffset={25}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        colors={{ scheme: "nivo" }}
        blendMode="multiply"
        motionConfig="wobbly"
      />
    </Box>
  );
}

export default ShotsByType;
