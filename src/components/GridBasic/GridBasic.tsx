"use client";
import { Product } from "@/models";
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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GridBasic.scss";
import { DialogForm } from "../DialogForm";
import { getNextId } from "@/utilities/string.utility";

export type GridBasicProps = {
  title: string;
};

const GridBasic: React.FC<GridBasicProps> = ({ title }) => {
  const products: Product[] = useSelector((store: AppStore) => store.products);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

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
            const productsFiltered = products.filter(
              (product) => product.id !== params.value
            );
            dispatch(addProduct(productsFiltered));
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
    product.id = `${getNextId(products)}`;
    dispatch(addProduct([...products, product]));
    setIsAddModalOpen(false);
  };

  return (
    <div className="gridContainer">
      <div className="gridOptions">
        <Typography variant="h4">{title}</Typography>
        <Button
          variant="outlined"
          startIcon={<Add />}
          onClick={() => setIsAddModalOpen(true)}
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
      <DialogForm
        open={isAddModalOpen}
        setOpen={() => setIsAddModalOpen(false)}
        onAdd={(data) => handleAddProduct(data)}
      />
    </div>
  );
};

export const GridBasicStl = styled.div``;

export default GridBasic;
