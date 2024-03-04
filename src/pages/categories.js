import React from "react";
import '../styles/buttonsImageOverlay.css'
import map from "../images/map.png";
import { ThemeProvider } from "@emotion/react";
import ParkIcon from '@mui/icons-material/Park';
import ScienceIcon from '@mui/icons-material/Science';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import CameraIcon from '@mui/icons-material/Camera';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { Button, Container, CssBaseline, createTheme } from "@mui/material";

const defaultTheme = createTheme();

export default function Categories() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="button-overlay">
        <img src={map} style={{ width: "100%" }} />
        <h3>Topics</h3>
        <button className="button1">
          <ParkIcon />
          Environment & Nature</button>
        <button className="button2">
          <ScienceIcon />
          Technology</button>
        <button className="button3">
          <NightlifeIcon />
          Lifestyle & Fashion</button>
        <button className="button4">
          <CameraIcon />
          Photography</button>
        <button className="button5">
          <FastfoodIcon />
          Food</button>
        <button className="button6">
          <AirplanemodeActiveIcon />
          Holiday & Travel</button>
        <button className="button7">
          <DirectionsRunIcon />
          Healthcare</button>
        </div>
      </Container>
    </ThemeProvider>
  );
}
