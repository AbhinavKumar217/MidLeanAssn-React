import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../components/mainFeaturedPost";
import { Container, CssBaseline, Grid } from "@mui/material";
import FeaturedPost from "../components/featuredPost";
import Sidebar from "../components/sidebar";

const defaultTheme = createTheme();

export default function HomePage(props) {
  const { mainfeaturedpost, featuredposts, sidebar, posts } = props;

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainfeaturedpost} />
          <Grid container spacing={5} sx={{ mt: 3 }}>
          {featuredposts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
