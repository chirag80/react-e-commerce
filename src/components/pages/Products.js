import React, { useContext, useEffect } from "react";
import Filters from "../products/Filters";
import ProductContext from "../../context/product/productContext";
import Product from "../products/Product";
import { Card } from "semantic-ui-react";

const Products = () => {
  const productContext = useContext(ProductContext);
  const { products, getProducts } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Filters />
      {products !== null && (
        <Card.Group itemsPerRow={4}>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </Card.Group>
      )}
      {/* products.map(product => <Product key={product.id} {...product} /> */}
    </>
  );
};

export default Products;
