import React, { useContext } from "react";
import { Card, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProductContext from "../../context/product/productContext";

const Product = ({
  product: {
    id,
    title,
    price,
    image: { url }
  }
}) => {
  const { setCurrent } = useContext(ProductContext);

  return (
    <>
      <Card>
        <Image src={url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>${price}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button
              basic
              as={Link}
              onClick={() => {
                setCurrent(id);
              }}
              to={`/products/${id}`}
              color='blue'
            >
              Details
            </Button>
          </div>
        </Card.Content>
      </Card>
    </>
  );
};

export default Product;
