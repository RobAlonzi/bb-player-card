import React from "react";
import Box from "@mui/material/Box";
import { ResponsiveBar } from "@nivo/bar";

import { groupPenaltiesByType } from "./util";

function PenaltiesByType({ playerId, events }) {
  const data = groupPenaltiesByType(events, playerId);

  return (
    <Box height={300}>
      <ResponsiveBar
        groupMode="grouped"
        data={data}
        keys={["Taken", "Drawn", "Served"]}
        indexBy="type"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        enableGridY={false}
      />
    </Box>
  );
}

export default PenaltiesByType;
