import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

import { formatShiftForLog } from './util';


function PlayerTableHeaderCells() {
  return (
    <>
      <TableCell>Date</TableCell>
      <TableCell>Team</TableCell>
      <TableCell>Opponent</TableCell>
      <TableCell align="right">Shift Number</TableCell>
      <TableCell align="right">Period</TableCell>
      <TableCell align="right">Start Time</TableCell>
      <TableCell align="right">End Time</TableCell>
      <TableCell align="right">Duration</TableCell>
    </>
  )
}

function PlayerTableBodyCells({ row }) {
  const shift = formatShiftForLog(row);
  return (
    <>
      <TableCell>{shift.date}</TableCell>
      <TableCell>{shift.team}</TableCell>
      <TableCell>{shift.opponent}</TableCell>
      <TableCell align="right">{shift.number}</TableCell>
      <TableCell align="right">{shift.period}</TableCell>
      <TableCell align="right">{shift.startTime}</TableCell>
      <TableCell align="right">{shift.endTime}</TableCell>
      <TableCell align="right">{shift.duration}</TableCell>
    </>
  )
}


function ShiftLog({ shifts }) {
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
              <PlayerTableHeaderCells />
            </TableRow>
          </TableHead>
          <TableBody>
            {shifts.slice(page * 10, page * 10 + 10).map((row) => (
              <TableRow
                key={row.shift.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <PlayerTableBodyCells row={row} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={shifts.length}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </>
  );
}

export default ShiftLog;