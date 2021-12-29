import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Placeholder from "@/components/Common/Placeholder";

function PlayerCardHeaderAdditionalInfo({ data = {}, isLoading }) {
  const {
    birthCity,
    birthCountry,
    birthDate,
    currentAge,
    shootsCatches,
    rosterStatus,
    rookie,
  } = data;
  return (
    <>
      <Grid container item>
        <Grid item xs={6}>
          <Typography
            color="primary"
            sx={{ lineHeight: 1.35, fontSize: 14, marginRight: 2 }}
          >
            Roster Status:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Placeholder
            ready={!isLoading}
            variant="text"
            width={110}
            height={18}
          >
            <Typography color="primary" sx={{ lineHeight: 1.35, fontSize: 14 }}>
              {rosterStatus === "N" ? "Inactive" : "Active"}
            </Typography>
          </Placeholder>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item xs={6}>
          <Typography
            color="primary"
            sx={{ lineHeight: 1.35, fontSize: 14, marginRight: 2 }}
          >
            Date of Birth:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Placeholder
            ready={!isLoading}
            variant="text"
            width={110}
            height={18}
          >
            <Typography color="primary" sx={{ lineHeight: 1.35, fontSize: 14 }}>
              {birthDate} ({currentAge})
            </Typography>
          </Placeholder>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item xs={6}>
          <Typography
            color="primary"
            sx={{ lineHeight: 1.35, fontSize: 14, marginRight: 2 }}
          >
            Birthplace:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Placeholder
            ready={!isLoading}
            variant="text"
            width={110}
            height={18}
          >
            <Typography color="primary" sx={{ lineHeight: 1.35, fontSize: 14 }}>
              {birthCity}, {birthCountry}
            </Typography>
          </Placeholder>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item xs={6}>
          <Typography
            color="primary"
            sx={{ lineHeight: 1.35, fontSize: 14, marginRight: 2 }}
          >
            Handedness:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Placeholder
            ready={!isLoading}
            variant="text"
            width={110}
            height={18}
          >
            <Typography color="primary" sx={{ lineHeight: 1.35, fontSize: 14 }}>
              {shootsCatches === "L" ? "Left" : "Right"}
            </Typography>
          </Placeholder>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item xs={6}>
          <Typography
            color="primary"
            sx={{ lineHeight: 1.35, fontSize: 14, marginRight: 2 }}
          >
            Rookie:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Placeholder
            ready={!isLoading}
            variant="text"
            width={110}
            height={18}
          >
            <Typography color="primary" sx={{ lineHeight: 1.35, fontSize: 14 }}>
              {String(rookie)}
            </Typography>
          </Placeholder>
        </Grid>
      </Grid>
    </>
  );
}

export default PlayerCardHeaderAdditionalInfo;
