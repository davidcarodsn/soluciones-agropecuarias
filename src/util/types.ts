export interface ProductData {
  img?: string;
  name: string;
  filters: string[];
  specs?: {
    description?: string; 
    features?: ProductFeature;
    pa?: string;
  }
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

export enum ProductTypes {
  FERTILIZANTES = 'fertilizantes',
  FERTILIZANTES_GRANULADOS = 'granulados',
  FERTILIZANTES_SOLUBLES = 'solubles',
  FERTILIZANTES_LIQUIDOS = 'fertilizantes_liquidos',
  FERTILIZANTES_LIQUIDOS_HERBICIDAS = 'fertiliantes_liquidos_herbicidas',
  HERBICIDAS = 'herbicidas',
  INSECTICIDAS_GENERAL = 'insecticidas',
  FUNGICIDAS = 'fungicidas',
  SEMILLA = 'semilla',
  HERMICIDAS = 'hermicidas'
}

export interface FacebookPost {
  description: string;
  icon: string;
  comments: FacebookPostComments[];
  created_time: string;
  image: FacebookPostImage;
  url: string;
  reactions: any[];
}

export interface FacebookPostComments {
  created_time: string;
  message: string;
  from: {
    name: string;
    id: string;
    picture: {
      data: {
        height: number;
        is_silhouette: boolean;
        url: string;
        width: number;
      }
    }
  }
}

export interface FacebookPostImage {
  height: number;
  src: string;
  width: number;
}

export interface BlogContextState {
 keys: Keys | undefined;
 facebookPostDetail: FacebookPost | undefined;
 facebookPostData: FacebookPost[] | undefined;
}

export interface Keys {
  FACEBOOK_TOKEN: string;
  FACEBOOK_PAGE_ID: string;
}

