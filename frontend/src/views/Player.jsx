import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import Container from '@/components/Container';
import PaddedGrid from '@/components/Common/PaddedGrid';
import PlayerCardHeader from '@/components/PlayerCardHeader';
import PlayerCardTabs, { TabPanel } from '@/components/PlayerCardTabs';
import PlayerStatsOverview from '@/components/PlayerStatsOverview';
import PlayerSplits from '@/components/PlayerSplits';
import PlayerEvents from '@/components/PlayerEvents';
import PlayerShifts from '@/components/PlayerShifts';

function Player() {
  const { id } = useParams();
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container>
      <Grid container>
        <PaddedGrid item xs={12}>
          <PlayerCardHeader playerId={id} />
        </PaddedGrid>
        <Grid item xs={12}>
          <PlayerCardTabs value={tabValue} onTabChange={setTabValue} />
        </Grid>
        <PaddedGrid item xs={12}>
          <TabPanel value={tabValue} index={0}>
            <PlayerStatsOverview playerId={id} />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <PlayerEvents playerId={id} />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <PlayerShifts playerId={id} />
          </TabPanel>
        </PaddedGrid>
      </Grid>
    </Container>
  )
}


export default Player;