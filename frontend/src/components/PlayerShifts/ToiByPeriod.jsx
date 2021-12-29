import React from 'react';
import Box from '@mui/material/Box';
import { ResponsiveBar } from '@nivo/bar'

import { groupToiByPeriod, convertSecondsToStringMinutes } from './util';

function ToiByPeriod({ shifts }) {
  const data = groupToiByPeriod(shifts);

  return (
    <Box height={300}>
      <ResponsiveBar
        groupMode="grouped"
        data={data}
        keys={['Time on Ice']}
        indexBy="type"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        enableGridY={false}
        valueFormat={convertSecondsToStringMinutes}
        isInteractive={false}
        axisLeft={{
          format: convertSecondsToStringMinutes
        }}
        axisBottom={{
          format: (val) => `Period #${val}`
        }}
      />
    </Box>
  )
}


export default ToiByPeriod;