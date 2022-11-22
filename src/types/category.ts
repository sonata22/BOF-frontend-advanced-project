export interface Category {
  id?: number;
  name: string;
  image: string;
}

export interface CategoryReducer {
  categories: Category[];
  singleCategory: Category | undefined;
}
