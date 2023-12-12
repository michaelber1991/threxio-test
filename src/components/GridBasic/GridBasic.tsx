"use client";
import React from "react";
import styled from "@emotion/styled";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data";
import { Avatar } from "@mui/material";

export type GridBasicProps = {
  // types...
};

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
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
];

const GridBasic: React.FC<GridBasicProps> = () => {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={People}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export const GridBasicStl = styled.div``;

export default GridBasic;
