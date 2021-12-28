import React from 'react';
import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';

import { getPlayerVitals } from '@/data';

function PlayerSplits({ playerId }) {
  const { data, isLoading } = useQuery({
    queryKey: ['player-splits', playerId],
    queryFn: () => getPlayerVitals(playerId)
  })

  return (
    <Grid container spacing={2}>
      <Grid item>
        Splits!!
      </Grid>
    </Grid>
  )
}


export default PlayerSplits;