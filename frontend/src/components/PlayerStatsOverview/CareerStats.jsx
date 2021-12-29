import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';


function PlayerTableHeaderCells() {
  return (
    <>
      <TableCell>Season</TableCell>
      <TableCell>Team</TableCell>
      <TableCell align="right">Games</TableCell>
      <TableCell align="right">TOI</TableCell>
      <TableCell align="right">G</TableCell>
      <TableCell align="right">A</TableCell>
      <TableCell align="right">Shots</TableCell>
      <TableCell align="right">+/-</TableCell>
      <TableCell align="right">Hits</TableCell>
      <TableCell align="right">Blocks</TableCell>
    </>
  )
}

function PlayerTableBodyCells({ row }) {
  return (
    <>
      <TableCell component="th" scope="row">
        {row.season}
      </TableCell>
      <TableCell>{row.team.name}</TableCell>
      <TableCell align="right">{row.stat.games}</TableCell>
      <TableCell align="right">{row.stat.timeOnIce}</TableCell>
      <TableCell align="right">{row.stat.goals}</TableCell>
      <TableCell align="right">{row.stat.assists}</TableCell>
      <TableCell align="right">{row.stat.shots}</TableCell>
      <TableCell align="right">{row.stat.plusMinus}</TableCell>
      <TableCell align="right">{row.stat.hits}</TableCell>
      <TableCell align="right">{row.stat.blocked}</TableCell>
    </>
  )
}

function GoalieTableHeaderCells() {
  return (
    <>
      <TableCell>Season</TableCell>
      <TableCell>Team</TableCell>
      <TableCell>Record (W-L-OTL/T)</TableCell>
      <TableCell align="right">Games</TableCell>
      <TableCell align="right">Games Started</TableCell>
      <TableCell align="right">TOI</TableCell>
      <TableCell align="right">Shots Against</TableCell>
      <TableCell align="right">Saves</TableCell>
      <TableCell align="right">SV%</TableCell>
      <TableCell align="right">GAA</TableCell>
      <TableCell align="right">Shutouts</TableCell>
    </>
  )
}

function GoalieTableBodyCells({ row }) {
  return (
    <>
      <TableCell component="th" scope="row">
        {row.season}
      </TableCell>
      <TableCell>{row.team.name}</TableCell>
      <TableCell>{`${row.stat.wins}-${row.stat.losses}-${row.stat.ot !== undefined ? row.stat.ot : row.stat.ties}`}</TableCell>
      <TableCell align="right">{row.stat.games}</TableCell>
      <TableCell align="right">{row.stat.gamesStarted}</TableCell>
      <TableCell align="right">{row.stat.timeOnIce}</TableCell>
      <TableCell align="right">{row.stat.shotsAgainst}</TableCell>
      <TableCell align="right">{row.stat.saves}</TableCell>
      <TableCell align="right">{row.stat.savePercentage}</TableCell>
      <TableCell align="right">{row.stat.goalAgainstAverage}</TableCell>
      <TableCell align="right">{row.stat.shutouts}</TableCell>
    </>
  )
}


function CareerStats({ logs, position }) {
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="game log table" size="small">
          <TableHead>
            <TableRow>
              { position === 'G' ? <GoalieTableHeaderCells /> : <PlayerTableHeaderCells /> }
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.slice(page * 10, page * 10 + 10).map((row) => (
              <TableRow
                key={`${row.season}-${row.sequenceNumber}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                { position === 'G' ? <GoalieTableBodyCells row={row} /> : <PlayerTableBodyCells row={row} /> }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={logs.length}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </>
  );
}

export default CareerStats;