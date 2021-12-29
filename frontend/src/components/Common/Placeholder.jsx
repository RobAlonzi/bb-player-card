import React from "react";
import Skeleton from "@mui/material/Skeleton";

function Placeholder({ children, ready, ...props }) {
  if (ready) {
    return children;
  }

  return <Skeleton {...props} />;
}

export default Placeholder;
