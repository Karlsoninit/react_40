import React from "react";
import AppBar from "../AppBar";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserManu/UserManu";
import { HiFire, HiPaperClip } from "react-icons/hi";

const navLinks = [
  {
    href: "/университет",
    text: "университет",
    icon: HiFire,
  },
  {
    href: "/факультет",
    text: "факультет",
    icon: HiPaperClip,
  },
];

const CommonPageLayout = ({ name }) => {
  return (
    <AppBar>
      {{
        navigation: <Navigation links={navLinks} />,
        userMenu: <UserMenu name={name} />,
      }}
    </AppBar>
  );
};

export default CommonPageLayout;
