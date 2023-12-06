import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "80vh",
        backgroundColor: "#282c34",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" style={{ marginTop: "11px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>
          Back Home
        </Link>
      </Button>
    </Box>
  );
}
