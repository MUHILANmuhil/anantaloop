import React from "react";
import "./Nav.css";
import SpeedIcon from "@mui/icons-material/Speed";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Nav() {
  return (
    <div>
      <div className="navHeader">
        <div>
          <ul>
            <li>
              <div>
                <SpeedIcon />
              </div>
              <p>Dashboard</p>
            </li>
            <li>
              <div>
                <FormatListBulletedIcon />
              </div>
              <p>Tasks list</p>
            </li>
            <li>
              <div>
                <GroupIcon />
              </div>
              <p>User management</p>
            </li>
            <li>
              <div>
                <PersonIcon />
              </div>
              <p>Role management</p>
            </li>
            <li>
              <div>
                <SearchIcon />
              </div>
              <p>Search</p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <InfoOutlinedIcon />
              </div>
              <p>Help</p>
            </li>
            <li>
              <div>
                <SettingsOutlinedIcon />
              </div>
              <p>Settings</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
