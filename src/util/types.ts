export interface ProductData {
  img: string,
  title: string;
  description: string;
  productType: string;
  features?: ProductFeature;
}

export interface ProductFeature {
  activeSkill?: string;
  action?: string; 
  usageRecommendations?: string;
  applicationMethod?: string; 
  dosage?: string;
  pdfFiles?: ProductsPdfFiles;
  malezas?: string; 
  cultivos?: string;
}

export interface ProductsPdfFiles {
  marbete?: boolean;
  flyer?: boolean;
  securityDataPaper?: boolean;
}

export interface NavData {
  name: string;
  filter: string;
  products: string[];
}