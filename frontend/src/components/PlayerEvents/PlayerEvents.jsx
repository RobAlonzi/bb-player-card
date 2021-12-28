import React from 'react';
import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';

import { getPlayerVitals } from '@/data';

function PlayerEvents({ playerId }) {
  const { data, isLoading } = useQuery({
    queryKey: ['player-events', playerId],
    queryFn: () => getPlayerVitals(playerId)
  })

  return (
    <Grid container spacing={2}>
      <Grid item>
        Events!!
      </Grid>
    </Grid>
  )
}


export default PlayerEvents;