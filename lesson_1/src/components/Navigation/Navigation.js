import React from "react";
import NavigationItem from "../NavigationItem";
const data = [];
const Navigation = ({ links }) => {
  return links.map((link) => (
    <NavigationItem key={link.href} link={link} data={data} />
  ));
};

export default Navigation;
