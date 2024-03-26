import * as React from "react";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button, // Import Button component
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Mail as MailIcon, Phone as PhoneIcon } from "@mui/icons-material";
import { withRouter } from "react-router-dom";

function Header(props) {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "primary",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          id="main_tool_bar"
          style={{
            display: "flex",
            marginTop: 10,
          }}
          sx={{ justifyContent: { xs: "flex-start", md: "space-between" } }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="mailto:gm@gmglobalinc.com"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              gm@gmglobalinc.com
            </Typography>
          </Box>

          <Box sx={{ margin: { xs: "0 auto", md: "0" } }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="mailto:gmGlobal@gmail.com"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              gmGlobal@gmail.com
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography
              variant="body1"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              +1 (123) 456-7890
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="whatsapp://send?phone=+1 (123) 456-7890              "
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact via WhatsApp
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default withRouter(Header);
