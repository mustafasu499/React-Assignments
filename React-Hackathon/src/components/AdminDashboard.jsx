// src/components/Dashboard.js
import React, { useState } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Typography,
  Box,
} from "@mui/material";
import CustomerManagement from "./screens/CustomerManagement";
import RoomManagement from "./screens/RoomManagement";
import BookingManagement from "./screens/BookingManagement";
import PaymentManagement from "./screens/PaymentManagement";
import StaffManagement from "./screens/StaffManagement";
import ServiceManagement from "./screens/ServiceManagement";
import InventoryManagement from "./screens/InventoryManagement";
import ReportGeneration from "./screens/ReportGeneration";
import ProfileManagement from "./screens/ProfileManagement";

const drawerWidth = 240;

const Dashboard = () => {
  const [screen, setScreen] = useState("CustomerManagement");

  const screens = {
    CustomerManagement: <CustomerManagement />,
    RoomManagement: <RoomManagement />,
    BookingManagement: <BookingManagement />,
    PaymentManagement: <PaymentManagement />,
    StaffManagement: <StaffManagement />,
    ServiceManagement: <ServiceManagement />,
    InventoryManagement: <InventoryManagement />,
    ReportGeneration: <ReportGeneration />,
    ProfileManagement: <ProfileManagement />,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Hotel Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {Object.keys(screens).map((text) => (
            <ListItem button key={text} onClick={() => setScreen(text)}>
              <ListItemText primary={text.replace(/([A-Z])/g, " $1").trim()} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {screens[screen]}
      </Box>
    </Box>
  );
};

export default Dashboard;
