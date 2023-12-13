"use client";
import { GridBasic } from "@/components";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Home.scss";
import { addProduct } from "@/redux/states";
import { Products } from "@/data";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProduct(Products));
  });

  return <GridBasic title="Inventory"></GridBasic>;
};

export default Home;
