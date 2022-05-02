import React from "react";
import UnalmLogo from "./components/UnalmLogo";
import { AppBar, Typography, Box, Drawer, CssBaseline } from "@mui/material";

import Toolbar from "./components/BaseToolbar";
import NavMenu from "./components/layout/NavMenu";

const drawerWidth = 300;

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ py: 2 }}>
          <UnalmLogo />
          <Box sx={{ mx: 3 }}>
            <Typography variant="h5" component="h1">
              Universidad Nacional Agraria La Molina
            </Typography>
            <Typography variant="h6">
              Dirección de Bienestar Universitario
            </Typography>
            <Typography variant="subtitle1">
              Planificador de menu semanal
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <NavMenu />
      </Drawer>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        main
      </Box>
    </Box>
  );
}

export default App;
