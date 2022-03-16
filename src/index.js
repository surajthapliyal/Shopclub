import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Contexts/AuthContext";
import { MainProvider } from "./Contexts/MainContext";

ReactDOM.render(
    <MainProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </MainProvider>, document.getElementById("root"));
