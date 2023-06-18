export interface ProductData {
  title: string;
  img: string;
  productType: string;
  description: string;
  price?: string;
}


export interface CatalogData {
  img: string,
  title: string;
  description: string;
  productType: string;
}

export interface NavData {
  name: string;
  filter: string;
  products: string[];
}