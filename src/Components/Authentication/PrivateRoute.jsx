import React from "react";
import { useAuth } from "../../Contexts/AuthContext"
import { Route, Redirect } from "react-router-dom"


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth();
    console.log("this is,", Component);
    return (
        <Route {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
        >
        </Route>
    )
}
export default PrivateRoute