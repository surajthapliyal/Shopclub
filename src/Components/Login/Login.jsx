import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import useStyle from "./styles";
import GoogleLogin from "react-google-login";
import GoogleButton from 'react-google-button'
const Login = ({ handleLogin, handleFailure }) => {
  const classes = useStyle();
  return (
    <div className={classes.layout}>
      <Typography variant="h3" className={classes.heading}>Shopclub</Typography>
      <Typography variant="h5" className={classes.subheading}>Shop What You Desire For.</Typography>
      <br />
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={renderProps => (
          <GoogleButton onClick={renderProps.onClick} className={classes.googleButton}></GoogleButton>
        )}
        onSuccess={(data) => handleLogin(data)}
        onFailure={(data) => handleFailure(data)}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
};
export default Login;
