import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

import { formatEventForLog } from "./util";

function PlayerTableHeaderCells() {
  return (
    <>
      <TableCell>Date</TableCell>
      <TableCell>Team</TableCell>
      <TableCell>Opponent</TableCell>
      <TableCell align="right">Period</TableCell>
      <TableCell align="right">Period Time</TableCell>
      <TableCell align="right">Players</TableCell>
      <TableCell align="right">Type</TableCell>
      <TableCell align="right">Secondary Type</TableCell>
      <TableCell align="right">Description</TableCell>
    </>
  );
}

function PlayerTableBodyCells({ row }) {
  const event = formatEventForLog(row);
  return (
    <>
      <TableCell>{event.date}</TableCell>
      <TableCell>{event.team}</TableCell>
      <TableCell>{event.opponent}</TableCell>
      <TableCell align="right">{event.period}</TableCell>
      <TableCell align="right">{event.periodTime}</TableCell>
      <TableCell align="right">{event.players}</TableCell>
      <TableCell align="right">{event.type}</TableCell>
      <TableCell align="right">{event.secondaryType}</TableCell>
      <TableCell align="right">{event.description}</TableCell>
    </>
  );
}

function EventLog({ events }) {
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
            {events.slice(page * 10, page * 10 + 10).map((row) => (
              <TableRow
                key={row.event.result.eventCode}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
        count={events.length}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </>
  );
}

export default EventLog;
