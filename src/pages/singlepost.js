import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, createTheme } from "@mui/material";
import React from "react";
import Single from "../components/single";
import "../styles/singlepost.css";
import Sidebar from "../components/sidebar";
import PaginationButtons from "../components/pagination";

const defaultTheme = createTheme();

export default function Singlepost(props) {
  const { featuredposts } = props;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <CssBaseline />
        <div className="singlepost">
          <Single featuredposts={featuredposts} />
          <Sidebar
            featuredposts = {featuredposts}
          />
        </div>
        <PaginationButtons />
      </Container>
    </ThemeProvider>
  );
}
