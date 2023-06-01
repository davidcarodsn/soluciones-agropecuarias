export interface ProductData {
  title: string;
  img: string;
  productType: string;
  description: string;
  price?: string;
}

export interface NavData {
  productType: string;
  subProduct?: string[];
}

export interface CatalogData {
  img: string;
  title: string;
  description: string;
  price: string;
  productType: string;
}
