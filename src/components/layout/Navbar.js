import React, { useState } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [activeItem, setActiveItem] = useState(path);
  //console.log("active", activeItem);
  return (
    <>
      <Menu pointing secondary size='massive' color='teal'>
        <Menu.Item
          name='home'
          active={activeItem === "home"}
          onClick={handleItemClick}
          as={Link}
          to='/'
        />
        <Menu.Item
          name='products'
          active={activeItem === "products"}
          onClick={handleItemClick}
          as={Link}
          to='/products'
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='login'
            active={activeItem === "login"}
            onClick={handleItemClick}
            as={Link}
            to='/login'
          />
          <Menu.Item
            name='register'
            active={activeItem === "register"}
            onClick={handleItemClick}
            as={Link}
            to='/register'
          />
          <Menu.Item
            name='about'
            active={activeItem === "about"}
            onClick={handleItemClick}
            as={Link}
            to='/about'
          />
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Navbar;
