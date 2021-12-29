import React from "react";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";

import { getPlayerStats } from "@/data";
import Placeholder from "@/components/Common/Placeholder";
import InformationBlock from "@/components/Common/InformationBlock";
import BasicStats from "./BasicStats";
import GameLog from "./GameLog";
import CareerStats from "./CareerStats";

function PlayerStatsOverview({ playerId }) {
  const { data: { gamelog, career, season = {}, position } = {}, isLoading } =
    useQuery({
      queryKey: ["player-stats-overview", playerId],
      queryFn: () => getPlayerStats(playerId),
    });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <InformationBlock title="Player Stats">
          <Placeholder ready={!isLoading} variant="rectangular" height={200}>
            <BasicStats stats={season.stat} position={position} />
          </Placeholder>
        </InformationBlock>
      </Grid>
      <Grid item xs={12}>
        <InformationBlock title="Game Log">
          <Placeholder ready={!isLoading} variant="rectangular" height={200}>
            <GameLog logs={gamelog} position={position} />
          </Placeholder>
        </InformationBlock>
      </Grid>
      <Grid item xs={12}>
        <InformationBlock title="Career Stats">
          <Placeholder ready={!isLoading} variant="rectangular" height={200}>
            <CareerStats logs={career} position={position} />
          </Placeholder>
        </InformationBlock>
      </Grid>
    </Grid>
  );
}

export default PlayerStatsOverview;
