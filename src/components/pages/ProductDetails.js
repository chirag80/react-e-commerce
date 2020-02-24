import React, { useContext } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import ProductContext from "../../context/product/productContext";
import { Button, Image } from "semantic-ui-react";

const ProductDetails = () => {
  const { current } = useContext(ProductContext);
  const history = useHistory();

  const addToCart = product => {}; //this will be in cart context

  //const { id } = useParams();
  //const location = useLocation();
  //console.log(location);
  if (current === null) {
    history.push("/products");
    return <div>Loading...</div>;
  }

  //const product = products.find(item => item.id === parseInt(id));
  //console.log("product details : ", product);

  const { image, title, price, description } = current;
  return (
    <section className='single-product'>
      <Image src={image.url} alt={title} size='medium' />
      <article>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <p>{description}</p>
        <div className='ui two buttons'>
          <Button
            color='blue'
            onClick={() => {
              addToCart(current);
              history.push("/cart");
            }}
            basic
          >
            add to cart{" "}
          </Button>
          <Button
            color='blue'
            onClick={() => {
              history.goBack();
            }}
            basic
          >
            Back
          </Button>
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;
