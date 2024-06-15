import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../auth/authSlice";

import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";
import { Link } from "react-router-dom";
import CustomerServiceForm from "../../linkPages/createquery";
async function handleLogout(e) {
  window.open(`http://localhost:8080/auth/logout`, "_self");
}
function NavBarComponent({ children }) {
  const user = useSelector(selectLoggedInUser);
  return (
    <div className="w-100">
      <Navbar expand="lg" className="  text-sm-center  bg-body-secondary   ">
        <Navbar.Brand href="#home">
          <img
            src={user.picture}
            className="logo w-75  rounded-circle  img-thumbnail "
          ></img>
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=" w-100 ">
            <Nav className="text-black  d-flex flex-lg-row">
              <Link to="/">
                <Nav.Link href="#home" className=" link-opacity-100-hover ">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/createservice">
                <Nav.Link href="#link" className=" ">
                  Create Query
                </Nav.Link>
              </Link>
              <Link to="/seequeries">
                <Nav.Link href="#link" className=" ">
                  See Query
                </Nav.Link>
              </Link>
            </Nav>
            <Button
              onClick={handleLogout}
              href="#Login"
              className=" float-lg-end  btn btn-primary "
            >
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </div>
  );
}

export default NavBarComponent;
