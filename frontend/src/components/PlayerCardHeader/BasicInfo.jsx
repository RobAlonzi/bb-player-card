import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Placeholder from "@/components/Common/Placeholder";
import PlayerImage from "@/components/Common/PlayerImage";

function PlayerCardHeaderBasicInfo({ playerId, data = {}, isLoading }) {
  const {
    firstName,
    lastName,
    currentTeam: { name: teamName } = {},
    height,
    weight,
    primaryPosition: { name: position } = {},
    primaryNumber,
  } = data;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <PlayerImage playerId={playerId} />
      </Grid>
      <Grid container item xs direction="column">
        <Placeholder
          ready={!isLoading}
          variant="rectangular"
          height={135}
          width={300}
        >
          <Typography
            color="primary"
            sx={{ fontWeight: 200, fontSize: 32, lineHeight: 1 }}
          >
            {firstName}
          </Typography>
          <Typography
            color="primary"
            sx={{ fontWeight: 600, fontSize: 32, lineHeight: 1 }}
          >
            {lastName}
          </Typography>
          <Typography
            color="primary"
            sx={{ marginTop: 2, lineHeight: 1.35, fontSize: 14 }}
          >
            #{primaryNumber || "0"} &bull; {teamName ?? "N/A"}
          </Typography>
          <Typography color="primary" sx={{ lineHeight: 1.35, fontSize: 14 }}>
            {position}
          </Typography>
          <Typography color="primary" sx={{ lineHeight: 1.35, fontSize: 14 }}>
            {height} &bull; {weight} lbs
          </Typography>
        </Placeholder>
      </Grid>
    </Grid>
  );
}

export default PlayerCardHeaderBasicInfo;
