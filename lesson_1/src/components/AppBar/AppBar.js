import React from "react";
import { Layout } from "./AppBar.styles";

const AppBar = ({ children: { navigation, userMenu } }) => {
  const isStudent = false;
  return (
    <Layout isStudent={isStudent}>
      {navigation}
      {userMenu}
    </Layout>
  );
};

export default AppBar;
