import React from "react";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import UpdateProfile from "./Components/Authentication/UpdateProfile";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
import Checkout from "./Components/CheckoutForm/Checkout/Checkout";
import Cart from "./Components/Cart/Cart";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { useAuth } from "./Contexts/AuthContext"
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from './Components/Authentication/PrivateRoute';
import { useMainContext } from './Contexts/MainContext';

const App = () => {
    const { currentUser } = useAuth();
    const { cart, handleDrawerToggle } = useMainContext();
    return (
        <>
            <Router>
                <div style={{ display: 'flex' }}>
                    <CssBaseline />
                    {currentUser && <NavBar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />}
                    <Switch>
                        <PrivateRoute exact path="/" component={Products} />
                        <PrivateRoute exact path="/cart" component={Cart} />
                        <Route path="/checkout" exact component={Checkout} />
                        <Container
                            className="d-flex align-items-center justify-content-center"
                            style={{ minHeight: "100vh" }}
                        >
                            <div className="w-100" style={{ maxWidth: "400px" }}>
                                <Route path="/update-profile" component={UpdateProfile} />
                                <Route path="/signup" component={SignUp} />
                                <Route path="/login" component={Login} />
                                <Route path="/forgot-password" component={ForgotPassword} />
                            </div>
                        </Container>
                    </Switch>
                </div>
                {currentUser && <Footer />}
            </Router>
        </>
    );
};

export default App;
