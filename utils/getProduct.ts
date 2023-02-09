import products from './products';

export default (productId: string) => {
  console.log('products', products);
  console.log('productId', productId);
  return products.find((product) => {
    return product.id === productId;
  });
};
