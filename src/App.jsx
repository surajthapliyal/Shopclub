import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
import Checkout from "./Components/CheckoutForm/Checkout/Checkout";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import { commerce } from "./lib/commerce";

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const handleLogin = async (googleData) => {
    console.log(googleData.profileObj);
    setLoginData(googleData.profileObj);
    localStorage.setItem("loginData", JSON.stringify(googleData.profileObj));
  };
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      {loginData ? (
        <div style={{ display: "flex" }}>
          <CssBaseline />
          <NavBar
            handleLogout={handleLogout}
            totalItems={cart.total_items}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Products products={products} onAddToCart={handleAddToCart} />
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleUpdateCartQty={handleUpdateCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                />
              }
            />
            <Route
              exact
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  onCaptureCheckout={handleCaptureCheckout}
                />
              }
            />
          </Routes>
        </div>
      ) : (
        <Login handleLogin={handleLogin} handleFailure={handleFailure} />
      )}
    </Router>
  );
};

export default App;
