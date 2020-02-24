import React from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Cart from "./components/pages/Cart";
import NavBar from "./components/layout/Navbar";
import Products from "./components/pages/Products";
import ProductDetails from "./components/pages/ProductDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductState from "./context/product/ProductState";

function App() {
  return (
    <>
      <ProductState>
        <Router>
          <Container>
            <NavBar />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/register'>
                <Register />
              </Route>
              <Route exact path='/cart'>
                <Cart />
              </Route>
              <Route exact path='/products'>
                <Products />
              </Route>
              <Route exact path='/products/:id'>
                <ProductDetails />
              </Route>
            </Switch>
          </Container>
        </Router>
      </ProductState>
    </>
  );
}

export default App;
