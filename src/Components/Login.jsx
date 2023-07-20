import React from "react";
import { GoogleLogin } from 'react-google-login'
import { data } from "../Data";

export const Login = () => {


const onSuccess = (res) => {
    console.log(res)

}
const onFailure = (res)=>{
    console.log(res)
}

  return (
    <div>
       <GoogleLogin
        clientId={data.client_id}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
  />,
    </div>
  );
};
