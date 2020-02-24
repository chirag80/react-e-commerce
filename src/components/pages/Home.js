import React from "react";
import Hero from "../layout/Hero";
import { Link } from "react-router-dom";
import FeaturedProducts from "../products/FeaturedProducts";
import { Button } from "semantic-ui-react";

const Home = () => {
  return (
    <>
      <Hero>
        <Link to='/products'>Our Products</Link>
        {/* <Button as={Link} to='/products'>
          Our Products
        </Button> */}
      </Hero>
      <FeaturedProducts />
    </>
  );
};

export default Home;
