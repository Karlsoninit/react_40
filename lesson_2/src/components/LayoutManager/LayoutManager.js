import React from "react";
import AccountPageLayout from "../AccountPageLayout";
import CommonPageLayout from "../CommonPageLayout";

const LayoutManager = ({ pathname = false, name, getPermission }) => {
  const Layout = pathname ? CommonPageLayout : AccountPageLayout;
  return <Layout name={name} getPermission={getPermission} />;
};

export default LayoutManager;
