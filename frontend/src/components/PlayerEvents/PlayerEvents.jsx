import React from 'react';
import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';

import { getPlayerEvents } from '@/data';
import Placeholder from '@/components/Common/Placeholder';
import InformationBlock from '@/components/Common/InformationBlock';
import EventsByType from './EventsByType';
import ShotsByType from './ShotsByType';
import SavesByType from './SavesByType';
import PenaltiesByType from './PenaltiesByType';
import EventLog from './EventLog';

function PlayerEvents({ playerId }) {
  const { data: { events, position } = {}, isLoading } = useQuery({
    queryKey: ['player-events', playerId],
    queryFn: () => getPlayerEvents(playerId)
  })

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <InformationBlock title="Events by Type">
          <Placeholder ready={!isLoading} variant="rectangular" height={200}>
            <EventsByType playerId={playerId} events={events} />
          </Placeholder>
        </InformationBlock>
      </Grid>
      <Grid item xs={6}>
        <InformationBlock title={`${position === 'G' ? 'Save Pct' : 'Shots'} by Type`}>
          <Placeholder ready={!isLoading} variant="rectangular" height={200}>
            { position === 'G' ? <SavesByType playerId={playerId} events={events} /> : <ShotsByType playerId={playerId} events={events} /> }
          </Placeholder>
        </InformationBlock>
      </Grid>
      <Grid item xs={6}>
        <InformationBlock title="Penalties by Type">
          <Placeholder ready={!isLoading} variant="rectangular" height={200}>
            <PenaltiesByType playerId={playerId} events={events} />
          </Placeholder>
        </InformationBlock>
      </Grid>
      <Grid item xs={12}>
        <InformationBlock title="Event Log">
          <Placeholder ready={!isLoading} variant="rectangular" height={200}>
            <EventLog playerId={playerId} events={events} />
          </Placeholder>
        </InformationBlock>
      </Grid>
    </Grid>
  )
}


export default PlayerEvents;