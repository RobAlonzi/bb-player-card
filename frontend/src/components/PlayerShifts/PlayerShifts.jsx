import React from "react";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

import { getPlayerShifts } from "@/data";
import Placeholder from "@/components/Common/Placeholder";
import InformationBlock from "@/components/Common/InformationBlock";
import Overview from "./Overview";
import ToiByPeriod from "./ToiByPeriod";
import ShiftLog from "./ShiftLog";

function PlayerShifts({ playerId }) {
  const { data: { shifts, position } = {}, isLoading } = useQuery({
    queryKey: ["player-shifts", playerId],
    queryFn: () => getPlayerShifts(playerId),
  });

  return (
    <Grid container spacing={4}>
      {position === "G" && (
        <Grid item xs={12}>
          <Alert severity="warning">
            This info might not be useful for goalies, but we are displaying it
            anyways.
          </Alert>
        </Grid>
      )}
      <Grid item xs={6}>
        <InformationBlock title="Shift Stats">
          <Placeholder ready={!isLoading} variant="rectangular" height={200}>
            <Overview shifts={shifts} />
          </Placeholder>
        </InformationBlock>
      </Grid>
      <Grid item xs={6}>
        <InformationBlock title="TOI by Period">
          <Placeholder ready={!isLoading} variant="rectangular" height={200}>
            <ToiByPeriod shifts={shifts} />
          </Placeholder>
        </InformationBlock>
      </Grid>
      <Grid item xs={12}>
        <InformationBlock title="Shift Log">
          <Placeholder ready={!isLoading} variant="rectangular" height={200}>
            <ShiftLog shifts={shifts} />
          </Placeholder>
        </InformationBlock>
      </Grid>
    </Grid>
  );
}

export default PlayerShifts;
