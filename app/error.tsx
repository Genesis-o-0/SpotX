"use client"; 
import { useEffect } from "react";
import { Button } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Something went wrong!</h2>
      <h3>{error.message}</h3>
      <Button variant="contained" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}

