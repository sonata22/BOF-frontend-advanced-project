export interface Product {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: ProductCategory;
  images: string[];
  categoryId?: number;
}

export interface ProductCategory {
  id: number;
  name: Name;
  image: string;
  keyLoremSpace?: KeyLoremSpace;
}

export enum KeyLoremSpace {
  Fashion = "fashion",
  Furniture = "furniture",
  Watch = "watch",
}

export enum Name {
  Clothes = "Clothes",
  Electronics = "Electronics",
  Furniture = "Furniture",
  Others = "Others",
  Shoes = "Shoes",
}
