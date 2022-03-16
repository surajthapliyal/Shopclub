import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CircularProgress } from "@material-ui/core";
import { Fade } from "react-reveal";
import { useMainContext } from './../../Contexts/MainContext';


const Products = () => {
  const classes = useStyles();
  const {
    products,
    handleAddToCart,
    handleUpdateCartQty,
    productsPerCategory,
    setOpen,
    open,
  } = useMainContext();
  console.log("main    =====   ", productsPerCategory)
  const [productsToRender, setProductsToRender] = useState(products);

  useEffect(() => { setProductsToRender(products) }, [products])

  if (!productsToRender.length) {
    return <main style={{ height: "100vh" }} className={classes.content} onClick={() => setOpen(false)}>
      <p style={{ width: "auto", height: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}><CircularProgress color="secondary" /></p>
    </main>
  };
  const updateProductList = (categoryName) => {
    console.log(categoryName)
    const data = productsPerCategory.filter((item) => item.name === categoryName);
    console.log(data[0].productsData);
    setProductsToRender(data[0].productsData)
  }
  return (
    <main className={classes.content} onClick={() => setOpen(false)}>
      {open && (
        <Fade bottom duration={1000} distance="40px">
          <List
            sx={{
              width: "100%",
              maxWidth: 460,
              bgcolor: "#f8f9fa",
              boxShadow: "2px 5px 15px #adb5bd",
              position: "absolute",
              right: "-20px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Categories
              </ListSubheader>
            }
          >
            <ListItemButton onClick={() => setProductsToRender(products)}>
              <ListItemText
                className={classes.listItem}
                primary="All Products"
              />
            </ListItemButton>

            {productsPerCategory.map(item => {
              return <ListItemButton key={item.id} onClick={() => updateProductList(item.name)}>
                <ListItemText
                  className={classes.listItem}
                  primary={item.name}
                />
              </ListItemButton>
            })}
          </List>
        </Fade>
      )}

      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {productsToRender.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
