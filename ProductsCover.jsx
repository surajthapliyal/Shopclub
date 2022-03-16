import React, { useState, useEffect } from "react";
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
import { AuthProvider, useAuth } from "./Contexts/AuthContext"
import { commerce } from "./lib/commerce";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from './Components/Authentication/PrivateRoute'

const ProductsCover = () => {


    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [productsPerCategory, setProductsPerCategory] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [open, setOpen] = useState(false);
    const { currentUser } = useAuth();

    const fetchProducts = async () => {
        const { data: products } = await commerce.products.list({ limit: 100 });
        const { data: categoriesData } = await commerce.categories.list();
        const productsPerCategory = categoriesData.reduce((acc, category) => {
            return [
                ...acc,
                {
                    ...category,
                    productsData: products.filter((product) =>
                        product.categories.find((cat) => cat.id === category.id)
                    ),
                },
            ];
        }, []);

        console.log(products);
        setProductsPerCategory(productsPerCategory);
        setProducts(products);
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
        <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
    )
}

export default ProductsCover