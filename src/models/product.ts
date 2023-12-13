export enum ProductCategory {
  Juguetes = "Juguetes",
  Accesorios = "Accesorios",
  Comics = "Comics",
  Camisetas = "Camisetas",
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  stock: number;
}
