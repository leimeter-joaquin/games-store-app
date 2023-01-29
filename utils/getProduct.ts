import products from "./products";

export default (productId: string) => {
  console.log("products", products);
  console.log("productId", productId);
  return products.filter((product) => {
    return product.id === productId;
  });
};
