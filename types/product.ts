export type Product = {
  id: string;
  title: string;
  releaseDate: Date;
  price: number;
  discountPercentage: number;
  images: {
    url: string;
    previewUrl: string;
    alt: string;
  }[];
};
