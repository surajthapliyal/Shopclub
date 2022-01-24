import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from "react-router-dom";

import logo from "../../Assets/logo.png";
import useStyles from "./styles";

const PrimarySearchAppBar = ({ totalItems, handleLogout, setOpen }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="absolute" className={classes.appBar} color="inherit" >
        <Toolbar >
          <div onClick={() => setOpen(false)} className={classes.title}>
            <Link to="/" style={{
              textDecoration: "none", alignItems: "center",
              display: "flex",
            }}>
              <img
                src={logo}
                alt="commerce.js"
                height="35px"
                className={classes.image}
              />
              <span className={classes.logo}>Shopclub</span>
            </Link>
          </div>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div style={{ display: "flex" }}>
              <Button style={{ width: "auto" }}>
                <Typography variant="h6" style={{ color: "white", fontSize: "1.2vw" }} onClick={() => setOpen((prev) => !prev)}>Categories</Typography>
              </Button>
              <div className={classes.button}>
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
                >
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart style={{ color: "white" }} />
                  </Badge>
                </IconButton>
              </div>
            </div>
          )}
          <IconButton style={{ color: "white" }} aria-label="Logout" onClick={handleLogout}><LogoutIcon /></IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PrimarySearchAppBar;
