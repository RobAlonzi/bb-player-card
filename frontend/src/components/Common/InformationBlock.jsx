import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { COLORS } from "@/styles/colors";

const titleStyles = {
  ":before": {
    background: COLORS.GOLD,
    content: "''",
    display: "inline-block",
    marginRight: 1,
    height: 25,
    width: 5,
  },
  display: "flex",
  alignItems: "center",
  fontSize: 24,
  fontWeight: 600,
};

function InformationBlock({ title, children }) {
  return (
    <Box>
      <Box my={1}>
        <Typography sx={titleStyles}>{title}</Typography>
      </Box>
      <Box
        border={`1px solid ${COLORS.GRAY_BORDER}`}
        borderRadius={1}
        padding={1}
      >
        {children}
      </Box>
    </Box>
  );
}

export default InformationBlock;
