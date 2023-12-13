"use client";
import { Product, ProductCategory } from "@/models";
import { addProduct } from "@/redux/states";
import { AppStore } from "@/redux/store";
import styled from "@emotion/styled";
import { Add } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GridBasic.scss";

export type GridBasicProps = {
  title: string;
};

const GridBasic: React.FC<GridBasicProps> = (props) => {
  const products: Product[] = useSelector((store: AppStore) => store.products);
  const dispatch = useDispatch();
  const columnsActions: GridColDef[] = [
    {
      field: "id",
      headerName: "Actions",
      flex: 1,
      minWidth: 80,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          aria-label="delete"
          onClick={() => {
            const productsFilytered = products.filter(
              (product) => product.id !== params.value
            );
            dispatch(addProduct(productsFilytered));
          }}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];
  const columns: GridColDef[] = [
    {
      field: "image",
      headerName: "Preview",
      minWidth: 80,
      renderCell: (params: GridRenderCellParams) => (
        <Avatar alt="Image" variant="square" src={params.value} />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <TextField
          id="outlined-basic"
          label=""
          variant="standard"
          defaultValue={params.value}
          onChange={(event) => {
            let productsMapped = structuredClone(products);
            productsMapped = productsMapped.map((product) => {
              if (product.id === params.row.id)
                product.stock = Number(event.target.value);
              return product;
            });
            dispatch(addProduct(productsMapped));
          }}
        />
      ),
    },
    ...columnsActions,
  ];
  const handleAddProduct = (product: Product) => {
    dispatch(addProduct([...products, product]));
  };

  return (
    <div className="gridContainer">
      <div className="gridOptions">
        <Typography variant="h4">{props.title}</Typography>
        <Button
          variant="outlined"
          startIcon={<Add />}
          onClick={() =>
            handleAddProduct({
              id: "31",
              name: "hulk accesorio 80",
              category: ProductCategory.Accesorios,
              image: "image.jpg",
              stock: 15,
            })
          }
        >
          Add
        </Button>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          disableColumnSelector
          disableRowSelectionOnClick
          getRowId={(row) => row.id}
        />
      </div>
    </div>
  );
};

export const GridBasicStl = styled.div``;

export default GridBasic;
