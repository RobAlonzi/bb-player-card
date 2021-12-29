import React from "react";
import Box from "@mui/material/Box";
import { ResponsiveBar } from "@nivo/bar";

import { groupEventsByType } from "./util";

function EventsByType({ playerId, events }) {
  const data = groupEventsByType(events, playerId);

  return (
    <Box height={300}>
      <ResponsiveBar
        groupMode="grouped"
        data={data}
        keys={["Total"]}
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

export default EventsByType;
