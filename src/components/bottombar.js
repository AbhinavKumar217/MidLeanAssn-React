import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import icon from "../images/icon.png";
import { Toolbar } from "@mui/material";
import CompanyList from "./Companylist";
import ContactList from "./contactList";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import BasicList from "./meetusList";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        2023 Angantraya Birdseye LLP | All Rights Reserved.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description2 } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Toolbar maxWidth="lg" sx={{ display: "flex" }}>
        <img src={icon} alt="arogya icon" width="8%" style={{ flex: 0 }} />
        <Typography
          variant="subtitle1"
          align="left"
          color="text.secondary"
          component="p"
          flex={1}
        >
          Angantraya Birdseye LLP - A Destination Management Company & B2B Tour
          Company, Package Supplier, Travel Management Services like Cultural
          Packages, Corporate Packages, Adventure Packages, Honeymoon Packages,
          etc. We specialize in leisure and corporate travel to clients from
          India and other parts of the world.
          <br />
            <GitHubIcon />
            <FacebookIcon />
            <XIcon />
        </Typography>

        <CompanyList />
        <ContactList />
        <BasicList />
      </Toolbar>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
        flex={1}
      >
        {description2}
      </Typography>
      <Copyright />
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
