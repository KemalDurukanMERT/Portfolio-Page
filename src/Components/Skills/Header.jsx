import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container className="header-skills">
      <div className="d-flex justify-content-between my-2">
        <Image src={logo} alt="" width={"60px"} />
        <p className="fs-2">Skills</p>
        <img src={logo} alt="" width={"60px"} />
      </div>
    </Container>
  );
};

export default Header;
