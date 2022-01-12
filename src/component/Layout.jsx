import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import {format} from "date-fns";
import { Avatar } from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    padding: "30px",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  active: {
    backgroundColor: "#f4f4f4",
  },
  title: {
    padding: "25px",
  },
  appbar: {
    width:`calc(100% - ${drawerWidth}px) !important ` 
  },
  toolbar:{
marginTop:"50px"
  },
  date:{
    flexGrow: 1,
  },
  avatar:{
    marginLeft: "10px"
  }
});
const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItem = [
    {
      text: "My Notes",
      icon: <SubjectOutlinedIcon color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlinedIcon color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* App Bar */}
      <AppBar
      className = {classes.appbar} >
        <Toolbar>
        <Typography className={classes.date} >
        Today is the  { format(new Date(),'do MMMM Y') }
        </Typography>
        <Typography >
          Roshan 
        </Typography>
        <Avatar src="https://images.nintendolife.com/reviews/wii/super_mario_galaxy/1280x720.jpg" className={classes.avatar} /> 
               </Toolbar> 
      </AppBar>

      
      {/* Side Bar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}>
        <div>
          <Typography variant="h5" className={classes.title}>
            RR notes
          </Typography>
        </div>

        {/* List / links */}
        <List>
          {menuItem.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={
                location.pathname == item.path ? classes.active : null
              }>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
      <div className={classes.toolbar} >{children}</div>
      </div>
    </div>
  );
};

export default Layout;
