import React from 'react';
import Grid from '@mui/material/Grid';

import BasicStat from '@/components/Common/BasicStat';

function PlayerStatsOverviewBasic({ stats, position }) {
  const IS_GOALIE = position === 'G';
  
  if(!stats) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <BasicStat title="Games Played" value={stats.games} />
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="Games Started" value={stats.gamesStarted} /> : <BasicStat title="Goals" value={stats.goals} /> }
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="Record" value={`${stats.wins}-${stats.losses}-${stats.ot}`} /> : <BasicStat title="Assists" value={stats.assists} /> }
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="GAA" value={stats.goalAgainstAverage.toFixed(2)} /> : <BasicStat title="PIM" value={stats.pim} /> }
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="SV%" value={stats.savePercentage} /> : <BasicStat title="+/-" value={stats.plusMinus} /> }
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="SO" value={stats.shutouts} /> : <BasicStat title="TOI/G" value={stats.timeOnIcePerGame} /> }
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="Shots Against" value={stats.shotsAgainst} /> : <BasicStat title="Shots" value={stats.shots} /> }
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="Saves" value={stats.saves} /> : <BasicStat title="Shot %" value={stats.shotPct} /> }
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="EV SV%" value={(stats.evenStrengthSavePercentage / 100).toFixed(3)} /> : <BasicStat title="Hits" value={stats.hits} /> }
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="SH SV%" value={(stats.shortHandedSavePercentage / 100).toFixed(3)} /> : <BasicStat title="Blocked" value={stats.blocked} /> }
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="PP SV%" value={(stats.powerPlaySavePercentage / 100).toFixed(3)} /> : <BasicStat title="FO %" value={stats.faceOffPct} /> }
      </Grid>
      <Grid item xs={2}>
        { IS_GOALIE ? <BasicStat title="TOI" value={stats.timeOnIce} /> : <BasicStat title="GWG" value={stats.gameWinningGoals} /> }
      </Grid>
      
      {!IS_GOALIE && (
        <>
          <Grid item xs={2}>
            <BasicStat title="PP TOI/G" value={stats.powerPlayTimeOnIcePerGame} />
          </Grid>
          <Grid item xs={2}>
            <BasicStat title="PPP" value={stats.powerPlayPoints} />
          </Grid>
          <Grid item xs={2}>
            <BasicStat title="SH TOI/G" value={stats.shortHandedTimeOnIcePerGame} />
          </Grid>
          <Grid item xs={2}>
            <BasicStat title="SHP" value={stats.shortHandedPoints} />
          </Grid>
          <Grid item xs={2}>
            <BasicStat title="EV TOI/G" value={stats.evenTimeOnIcePerGame} />
          </Grid>
          <Grid item xs={2}>
            <BasicStat title="OTG" value={stats.overTimeGoals} />
          </Grid>
        </>
      )}
    </Grid>
  )
}


export default PlayerStatsOverviewBasic;