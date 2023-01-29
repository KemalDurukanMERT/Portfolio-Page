import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Skill = ({ name, img, options }) => {
  const [showImage, setShowImage] = useState(true);

  // console.log(name, img, options);
  console.log(showImage);

  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-2 h-100 lang-card"
      onClick={() => setShowImage(!showImage)}
      type="button"
    >
      {showImage && (
        <Container className="d-flex flex-column justify-content-between h-100 align-items-center">
          <Image className="lang-logo" src={img} style={{maxWidth:"70%", minHeight:"135px"}}></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}

      {!showImage && (
        <ol className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="h5 text-start">{item}</li>;
          })}
        </ol>
      )}
    </Container>
  );
};

export default Skill;
