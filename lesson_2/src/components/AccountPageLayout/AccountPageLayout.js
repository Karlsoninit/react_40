import React from "react";
import LoginForm from "../../modules/components/account/componets/LoginForm";

const AccountPageLayout = ({ getPermission }) => {
  return (
    <>
      <LoginForm getPermission={getPermission} />
    </>
  );
};

export default AccountPageLayout;
