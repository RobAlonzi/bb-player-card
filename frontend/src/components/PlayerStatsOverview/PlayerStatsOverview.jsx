import React from 'react';
import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';

import { getPlayerVitals } from '@/data';

function PlayerStatsOverview({ playerId }) {
  const { data, isLoading } = useQuery({
    queryKey: ['player-stats-overview', playerId],
    queryFn: () => getPlayerVitals(playerId)
  })

  return (
    <Grid container spacing={2}>
      <Grid item>
        Stats!!
      </Grid>
    </Grid>
  )
}


export default PlayerStatsOverview;