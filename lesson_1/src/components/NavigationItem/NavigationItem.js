import React from "react";

import { Link, IconBox, Text } from "./NavigationItem.styles";

const NavigationItem = ({ link: { href, text, icon: Icon } }) => {
  return (
    <Link href={href}>
      <IconBox>
        <Icon color="green" size="100" />
      </IconBox>
      <Text>{text}</Text>
    </Link>
  );
};

export default NavigationItem;
