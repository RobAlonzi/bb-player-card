import React from "react";
import Box from "@mui/material/Box";
import { ResponsiveRadar } from "@nivo/radar";

import { groupSavesByType } from "./util";

function SavesByType({ playerId, events }) {
  const data = groupSavesByType(events, playerId);
  return (
    <Box height={300}>
      <ResponsiveRadar
        data={data}
        keys={["Save Pct"]}
        indexBy="type"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: "color" }}
        gridLevels={6}
        gridLabelOffset={25}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        blendMode="multiply"
        motionConfig="wobbly"
        valueFormat={(val) => `${val.toFixed(3)}%`}
      />
    </Box>
  );
}

export default SavesByType;
