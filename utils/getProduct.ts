import products from './products';

export default (productId: string) => {
  return products.find((product) => {
    return product.id === productId;
  });
};
