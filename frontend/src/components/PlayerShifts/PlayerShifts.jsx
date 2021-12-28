import React from 'react';
import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';

import { getPlayerVitals } from '@/data';

function PlayerShifts({ playerId }) {
  const { data, isLoading } = useQuery({
    queryKey: ['player-shifts', playerId],
    queryFn: () => getPlayerVitals(playerId)
  })

  return (
    <Grid container spacing={2}>
      <Grid item>
        Shifts!!
      </Grid>
    </Grid>
  )
}


export default PlayerShifts;