import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Navbar.css";
import Content from "./Content";

import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

import Home from "./Home";
import Popular from "./Popular";
import TV_Series from "./TV_Series";
import Movies from "./Movies";
import Profile from "./Profile";
import Setting from "./Setting";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navbar_main">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        // sx={{ borderRight: 1, borderColor: "divider", color: "white" }}
        className="navbar_left"
      >
        <Tab
          className="nav_tab"
          icon={<HomeIcon />}
          label="Home"
          {...a11yProps(0)}
        />
        <Tab
          className="nav_tab"
          icon={<WhatshotIcon />}
          label="Popular"
          {...a11yProps(1)}
        />
        <Tab
          className="nav_tab"
          icon={<LiveTvIcon />}
          label="TV Series"
          {...a11yProps(2)}
        />
        <Tab
          className="nav_tab"
          icon={<MovieIcon />}
          label="Movies"
          {...a11yProps(3)}
        />
        <Tab
          className="nav_tab"
          icon={<PersonIcon />}
          label="Profile"
          {...a11yProps(4)}
        />
        <Tab
          className="nav_tab"
          id="nav_last"
          icon={<SettingsIcon />}
          label="Setting"
          {...a11yProps(5)}
        />
      </Tabs>

      <div className="navbar_right">
        <div className="nav_top">
          <TabPanel value={value} index={0}>
            <Home />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Popular />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TV_Series />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Movies />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Profile />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Setting />
          </TabPanel>
        </div>

        <div className="nav_bottom">
          <Content />
        </div>
      </div>
    </div>
  );
}
