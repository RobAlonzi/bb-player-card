import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const titleStyles = {
  fontWeight: '200',
  textTransform: 'uppercase'
}

const valueStyles = {
  fontWeight: '600',
}

function BasicStat({ title, value }) {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography sx={titleStyles}>{ title }</Typography>
      </Grid>
      <Grid item>
        <Typography sx={valueStyles}>{ value }</Typography>
      </Grid>
    </Grid>
  )
}


export default BasicStat;