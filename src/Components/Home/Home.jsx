import React from "react";
import { Button } from "react-bootstrap";
import "./Home.css";
import profil from "../../assets/IMG_3462.jpg";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div className="main-container" id="main-container">
      <div className="container-home">
        <div className="right">
          <div className="img">
            <img src={profil} alt="" />
          </div>
        </div>
        <div className="left">
          <div className="hi fs-3">
            Hello, <span className="hi">I'm</span>
          </div>
          <div className="name fs-1">Kemal Durukan MERT</div>
          <div className="title fs-2">
            Software Engineer And Full Stack Developer
          </div>
          <div className="description my-3 fs-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            fuga dignissimos dolorum eius vero, quas illum distinctio debitis
            eligendi similique corporis facere, consectetur itaque aliquam rem,
            rerum cumque nobis ratione?
          </div>
          <div style={{textAlign:"right"}}>
            <Button as="a" href="#skills-main" variant="danger">
              <BsArrowRight className="fs-3 mx-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
