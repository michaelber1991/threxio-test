"use client";
import React from "react";
import { GridBasic } from "@/components";
import { Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <>
      <Typography variant="h4">Inventory</Typography>
      <GridBasic></GridBasic>
    </>
  );
};

export default Home;
