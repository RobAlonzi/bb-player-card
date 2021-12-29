import React from "react";
import Grid from "@mui/material/Grid";

import {
  findAverageShiftLength,
  findMedianShiftLength,
  findLongestShiftLength,
  findFinalShiftOccurances,
  findStartingLineupOccurances,
} from "./util";
import BasicStat from "@/components/Common/BasicStat";

function PlayerShiftsOverview({ shifts }) {
  return (
    <Grid container spacing={2} sx={{ paddingBottom: "187px" }}>
      <Grid item xs={4}>
        <BasicStat title="Total Shifts" value={shifts.length} />
      </Grid>
      <Grid item xs={4}>
        <BasicStat
          title="In Starting Lineup"
          value={findStartingLineupOccurances(shifts)}
        />
      </Grid>
      <Grid item xs={4}>
        <BasicStat
          title="On for Final Regulation Shift"
          value={findFinalShiftOccurances(shifts)}
        />
      </Grid>
      <Grid item xs={4}>
        <BasicStat
          title="Avg Shift Length"
          value={findAverageShiftLength(shifts)}
        />
      </Grid>
      <Grid item xs={4}>
        <BasicStat
          title="Median Shift Length"
          value={findMedianShiftLength(shifts)}
        />
      </Grid>
      <Grid item xs={4}>
        <BasicStat
          title="Longest Shift"
          value={findLongestShiftLength(shifts)}
        />
      </Grid>
    </Grid>
  );
}

export default PlayerShiftsOverview;
