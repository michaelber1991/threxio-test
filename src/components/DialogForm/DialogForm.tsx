"use client";
import { Product } from "@/models";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export type DialogFormProps = {
  open: boolean;
  setOpen: () => void;
  onAdd: (data: Product) => void;
};

const DialogForm: React.FC<DialogFormProps> = (props) => {
  const form = useForm<Product>({
    defaultValues: {
      id: "",
      name: "",
      image: "",
      stock: 0,
    },
  });

  const { register, handleSubmit } = form;
  const handleClose = () => {
    props.setOpen();
  };

  const handleAdd = (data: Product) => {
    props.onAdd(data);
  };
  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Add product</DialogTitle>
      <form onSubmit={handleSubmit(handleAdd)}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            variant="outlined"
            {...register("name")}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="category"
            type="text"
            fullWidth
            variant="outlined"
            {...register("category")}
          />
          <TextField
            autoFocus
            margin="dense"
            id="image"
            label="image"
            type="text"
            fullWidth
            variant="outlined"
            {...register("image")}
          />
          <TextField
            autoFocus
            margin="dense"
            id="stock"
            label="stock"
            type="text"
            fullWidth
            variant="outlined"
            {...register("stock")}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogForm;
