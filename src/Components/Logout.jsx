import React from "react";
import { GoogleLogout } from "react-google-login";
import { data } from "../Data";

export const Logout = () => {
  const logout = () => {
    console.log('Log out successful');
  };

  return (
    <div>
      <GoogleLogout
        clientId={data.client_id}
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </div>
  );
};
