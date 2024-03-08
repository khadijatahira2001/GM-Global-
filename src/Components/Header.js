import * as React from "react";
import { useState, useEffect } from "react";
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
  ListItemIcon,
} from "@mui/material";
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
  const { history } = props;
  const [open, setOpen] = React.useState(false);
  const [isSticky, setIsSticky] = useState(true);
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
        id="MAIN_APP_BAR"
      
        position="sticky"
        sx={{
          backgroundColor: "ghostwhite",
          color: "black",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
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

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
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

            <Box
              id="pagesTest"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: { md: "flex-end" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  // onClick={handleCloseNavMenu}
                  onClick={() => handleButtonClick(page.pageUrl)}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
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
