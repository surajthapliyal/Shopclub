import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Fade } from "react-reveal";

const Products = ({ products, onAddToCart, open, setOpen }) => {
  const classes = useStyles();
  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content} onClick={() => setOpen(false)}>
      {/*  */}
      {open && (
        <Fade bottom duration={1000} distance="40px">
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              boxShadow: "1px 1px 5px gray",
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
            <ListItemButton>
              <ListItemText
                className={classes.listItem}
                primary="Men's Shirts"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                className={classes.listItem}
                primary="Men's Jeans"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                className={classes.listItem}
                primary="Women's Tops"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                className={classes.listItem}
                primary="Women's Jeans"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText className={classes.listItem} primary="Shoes" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                className={classes.listItem}
                primary="Accessories"
              />
            </ListItemButton>
          </List>
        </Fade>
      )}

      {/*  */}

      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
