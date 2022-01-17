import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import useStyle from "./styles";
import GoogleLogin from "react-google-login";
const Login = ({ handleLogin, handleFailure }) => {
  const classes = useStyle();

  return (
    <div className={classes.layout}>
      <Typography variant="h3">Shopclub</Typography>
      <Typography variant="h4">Shop What You Desire For.</Typography>
      <br />
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={(data) => handleLogin(data)}
        onFailure={(data) => handleFailure(data)}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
};
export default Login;
