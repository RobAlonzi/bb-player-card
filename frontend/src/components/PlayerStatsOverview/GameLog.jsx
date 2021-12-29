import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

function PlayerTableHeaderCells() {
  return (
    <>
      <TableCell>Date</TableCell>
      <TableCell>Team</TableCell>
      <TableCell>Opponent</TableCell>
      <TableCell align="right">Shifts</TableCell>
      <TableCell align="right">TOI</TableCell>
      <TableCell align="right">G</TableCell>
      <TableCell align="right">A</TableCell>
      <TableCell align="right">Shots</TableCell>
      <TableCell align="right">+/-</TableCell>
      <TableCell align="right">Hits</TableCell>
      <TableCell align="right">Blocks</TableCell>
    </>
  );
}

function GoalieTableHeaderCells() {
  return (
    <>
      <TableCell>Date</TableCell>
      <TableCell>Team</TableCell>
      <TableCell>Opponent</TableCell>
      <TableCell>Starter</TableCell>
      <TableCell>Decision</TableCell>
      <TableCell align="right">TOI</TableCell>
      <TableCell align="right">Shots</TableCell>
      <TableCell align="right">Saves</TableCell>
      <TableCell align="right">Pct</TableCell>
      <TableCell align="right">GA</TableCell>
    </>
  );
}

function PlayerTableBodyCells({ row }) {
  return (
    <>
      <TableCell component="th" scope="row">
        {row.date}
      </TableCell>
      <TableCell>{row.team.name}</TableCell>
      <TableCell>{row.opponent.name}</TableCell>
      <TableCell align="right">{row.stat.shifts}</TableCell>
      <TableCell align="right">{row.stat.timeOnIce}</TableCell>
      <TableCell align="right">{row.stat.goals}</TableCell>
      <TableCell align="right">{row.stat.assists}</TableCell>
      <TableCell align="right">{row.stat.shots}</TableCell>
      <TableCell align="right">{row.stat.plusMinus}</TableCell>
      <TableCell align="right">{row.stat.hits}</TableCell>
      <TableCell align="right">{row.stat.blocked}</TableCell>
    </>
  );
}

function GoalieTableBodyCells({ row }) {
  return (
    <>
      <TableCell component="th" scope="row">
        {row.date}
      </TableCell>
      <TableCell>{row.team.name}</TableCell>
      <TableCell>{row.opponent.name}</TableCell>
      <TableCell>{Boolean(row.stat.gamesStarted) ? "True" : "False"}</TableCell>
      <TableCell>{row.stat.decision || "N/A"}</TableCell>
      <TableCell align="right">{row.stat.timeOnIce}</TableCell>
      <TableCell align="right">{row.stat.shotsAgainst}</TableCell>
      <TableCell align="right">{row.stat.saves}</TableCell>
      <TableCell align="right">{row.stat.savePercentage}</TableCell>
      <TableCell align="right">{row.stat.goalsAgainst}</TableCell>
    </>
  );
}

function GameLog({ logs, position }) {
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
              {position === "G" ? (
                <GoalieTableHeaderCells />
              ) : (
                <PlayerTableHeaderCells />
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.slice(page * 10, page * 10 + 10).map((row) => (
              <TableRow
                key={row.date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {position === "G" ? (
                  <GoalieTableBodyCells row={row} />
                ) : (
                  <PlayerTableBodyCells row={row} />
                )}
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

export default GameLog;
