"use client";
import { Product } from "@/models";
import { AppStore } from "@/redux/store";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Products.scss";
import { addProduct } from "@/redux/states";

const Products: React.FC = () => {
  const products: Product[] = useSelector((store: AppStore) => store.products);
  const dispatch = useDispatch();
  const handleBuy = (data: Product) => {
    let productsMapped = structuredClone(products);
    productsMapped = productsMapped.map((product) => {
      if (product.id === data.id) product.stock--;
      return product;
    });
    dispatch(addProduct(productsMapped));
  };
  return (
    <div className="productsContainer">
      {products.map((product) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/src/assets/marvel.jpg"
              alt="product"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.stock}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => handleBuy(product)}
              disabled={product.stock == 0}
            >
              Buy
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Products;
