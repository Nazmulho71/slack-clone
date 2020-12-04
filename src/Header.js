import React from "react";
import Avatar from '@material-ui/core/Avatar';
import ScheduleIcon from "@material-ui/icons/Schedule";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";
import "./Header.css";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <ScheduleIcon />
      </div>
      <div className="header__search">
        <SearchIcon />

        <input placeholder="Search Developer" type="text" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
