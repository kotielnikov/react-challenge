import { Typography } from "@material-ui/core";
import React from "react";

/**
 * This component should not be touched!
 */
export const Meta = ({ address, owners }) => {
  let i = 0;
  while (i < 10e3) i += 1;

  return (
    <Typography variant="body2">
      {address.street} | {address.code} | {address.city}
      <br />
      Geschäftsführung: {owners.join(", ")}
      {Array.from(Array(3000).keys()).map((i) => (
        <span
          key={i}
          style={{ position: "absolute", width: 0, height: 0, left: "-1000px" }}
        />
      ))}
    </Typography>
  );
};
