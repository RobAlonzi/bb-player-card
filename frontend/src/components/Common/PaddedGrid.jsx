import Grid from '@mui/material/Grid';
import { alpha, styled } from '@mui/material/styles';

const PaddedGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1, 4)
}));

export default PaddedGrid;