import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';

import { getPlayerStats } from '@/data';
import Container from '@/components/Container';
import PaddedGrid from '@/components/Common/PaddedGrid';
import PlayerCardTabs, { TabPanel } from '@/components/PlayerCardTabs';

function Player() {
  const { id } = useParams();
  const [tabValue, setTabValue] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ['player-vitals', id],
    queryFn: () => getPlayerStats(id)
  })

  return (
    <Container>
      <Grid container>
        <PaddedGrid item xs={12}>
          { JSON.stringify(data) }
        </PaddedGrid>
        <Grid item xs={12}>
          <PlayerCardTabs value={tabValue} onTabChange={setTabValue} />
        </Grid>
        <PaddedGrid item xs={12}>
          <TabPanel value={tabValue} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            Item Three
          </TabPanel>
        </PaddedGrid>
      </Grid>
    </Container>
  )
}


export default Player;