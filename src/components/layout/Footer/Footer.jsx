import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ViewListIcon from "@mui/icons-material/ViewList";
import ReplayIcon from "@mui/icons-material/Replay";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const Footer = () => {
  const [value, setValue] = useState("list");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%", backgroundColor: "#202020"}}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        value="home"
        icon={
          <HomeIcon sx={{ color: value === "home" ? "#d39b24" : "white" }} />
        }
      />
      <BottomNavigationAction
        value="tvIcon"
        icon={
          <LiveTvIcon
            sx={{ color: value === "tvIcon" ? "#d39b24" : "white" }}
          />
        }
      />
      <BottomNavigationAction
        value="list"
        icon={
          <ViewListIcon
            sx={{ color: value === "list" ? "#d39b24" : "white" }}
          />
        }
      />
      <BottomNavigationAction
        value="replay"
        icon={
          <ReplayIcon
            sx={{ color: value === "replay" ? "#d39b24" : "white" }}
          />
        }
      />
      <BottomNavigationAction
        value="library"
        icon={
          <LocalLibraryIcon
            sx={{ color: value === "library" ? "#d39b24" : "white" }}
          />
        }
      />
    </BottomNavigation>
  );
};
