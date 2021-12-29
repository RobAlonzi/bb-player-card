import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const styles = {
  borderBottom: 1,
  borderTop: 1,
  borderColor: 'divider',
  paddingLeft: 2
}

function PlayerCardTabs({ value, onTabChange }) {
  function handleChange(_, newValue) {
    onTabChange(newValue)
  }

  return (
    <Box sx={styles}>
      <Tabs value={value} onChange={handleChange} >
        <Tab label="Overview" />
        <Tab label="Events" />
        <Tab label="Shifts" />
      </Tabs>
    </Box>
  )
}


export default PlayerCardTabs;