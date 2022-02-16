import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import React from 'react';




export default function Navbar() {
  return (
    <>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/favList">Favorites</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}



