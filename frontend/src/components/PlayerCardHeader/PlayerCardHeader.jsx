import React from "react";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";

import BasicInfo from "./BasicInfo";
import AdditionalInfo from "./AdditionalInfo";
import { getPlayerVitals } from "@/data";

function PlayerCardHeader({ playerId }) {
  const { data, isLoading } = useQuery({
    queryKey: ["player-vitals", playerId],
    queryFn: () => getPlayerVitals(playerId),
  });

  return (
    <Grid container alignItems="center">
      <Grid item xs>
        <BasicInfo playerId={playerId} data={data} isLoading={isLoading} />
      </Grid>
      <Grid item xs={6} sm={4} md={2}>
        <AdditionalInfo data={data} isLoading={isLoading} />
      </Grid>
    </Grid>
  );
}

export default PlayerCardHeader;
