import { ThemeProvider } from "@emotion/react";
import { Button, Container, CssBaseline, createTheme } from "@mui/material";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const defaultTheme = createTheme();

export default function () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <CssBaseline />
        <h1 style={{ fontSize: "1500%", color: "turquoise", margin: "0px" }}>
          404
        </h1>
        <h4>The page you are looking for is not available</h4>
        <Button>
          <ArrowBackIcon />
          Back to HomePage</Button>
      </Container>
    </ThemeProvider>
  );
}
