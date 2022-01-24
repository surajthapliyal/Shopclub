import React, { useState } from "react";
import useStyle from "./styles";
import GoogleLogin from "react-google-login";
import "./login.css";

const Login = ({ handleLogin, handleFailure }) => {
  const classes = useStyle();
  return (
    <div className="main">
      <div className={classes.container}>
        <div className={classes.headingBox}>
          <h1 className={classes.heading}>Shopclub</h1>
          <h3 className={classes.subheading}>Choose Wide, Choose Style</h3>
          <p className={classes.tagline}>
            Trendy fashion collection of clothes, shoes, accessories.
          </p>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className={classes.googleButton}
              >
                Login with Google
              </button>
            )}
            buttonText="Log IN"
            onSuccess={(data) => handleLogin(data)}
            onFailure={(data) => handleFailure(data)}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      </div>
    </div>
  );
};
export default Login;
