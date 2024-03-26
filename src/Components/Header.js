import * as React from "react";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Drawer,
  ListItem,
  Tabs,
  Tab,
  ListItemIcon,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Mail as MailIcon,
  Menu as MenuIcon,
  MoveToInbox as InboxIcon,
  Adb as AdbIcon,
} from "@mui/icons-material";
import { withRouter } from "react-router-dom";
const pages = [
  { title: "Home", pageUrl: "/" },
  { title: "About US", pageUrl: "/about" },
  { title: "Services", pageUrl: "/services" },
  { title: "Contact US", pageUrl: "/contact" },
];

function Header(props) {
  console.log("props in header", props);
  const theme = useTheme();
  const { history } = props;
  const [value, setValue] = useState(getTabValue());

  function getTabValue() {
    const pathName = window.location.pathname;
    const PageNames = {
      "/": 0,
      "/about": 1,
      "/services": 2,
      "/contact": 3,
    };
    return PageNames[pathName];
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleButtonClick(pages[newValue].pageUrl);
  };

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Toolbar />
      <List>
        {pages.map((page, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleButtonClick(page.pageUrl)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          color: "black",
          height: 100,
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
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
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
                LOGO
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: { xs: 0, md: 1 },
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(!open)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ margin: { xs: "0 auto", md: "0" } }}>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
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
                LOGO
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: { md: "flex-end" },
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
              >
                {pages.map((page, index) => (
                  <Tab
                    disableRipple={true}
                    disableFocusRipple={true}
                    key={index}
                    label={page.title}
                  />
                ))}
              </Tabs>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
export default withRouter(Header);
