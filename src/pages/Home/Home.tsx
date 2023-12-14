"use client";
import { GridBasic } from "@/components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import { addProduct } from "@/redux/states";
import { Products } from "@/data";
import { Product } from "@/models";
import { AppStore } from "@/redux/store";

const Home: React.FC = () => {
  const products: Product[] = useSelector((store: AppStore) => store.products);
  const dispatch = useDispatch();
  if (products.length == 0) dispatch(addProduct(Products));

  return <GridBasic title="Inventory"></GridBasic>;
};

export default Home;
