import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../Assets/logo.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";
const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="ShopClub"
              height="25px"
              className={classes.image}
            />
            Shopclub
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show Cart Items"
              color="inherit"
            >
              {/* badgeContent is no. of items in the cart */}
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
