type Image = {
  url: string;
  previewUrl: string;
  alt: string;
};

export type Product = {
  id: string;
  title: string;
  releaseDate: Date;
  price: number;
  discoutPercentage: number;
  images: Image[];
};
