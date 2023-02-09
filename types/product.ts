export type Product = {
  id: string;
  title: string;
  releaseDate: Date;
  price: number;
  discoutPercentage: number;
  images: {
    url: string;
    previewUrl: string;
    alt: string;
  }[];
};
