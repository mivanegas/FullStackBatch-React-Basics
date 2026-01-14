import Carousel from "react-bootstrap/Carousel";
import rainforest from "../assets/rainforest.png";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";

const brandStyle = {
  backgroundColor: "#93e4c1",
  borderRadius: "10px",
  padding: "8px",
};

function Header() {
  return (
    <div>
      <h1 className="display-2 pb-3">
        Welcome to <br />
        <span style={brandStyle} className="brand-font">
          QUETZAL GROVE BOOKS
        </span>
      </h1>
      <Carousel>
        <Carousel.Item>
          <img src={rainforest} className="img-fluid rainforest" />
          <Carousel.Caption>
            <h3 className="fw-bold">
              Where freedom is found between the pages 🦋
            </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={banner} className="img-fluid rainforest" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={banner2} className="img-fluid rainforest" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={banner3} className="img-fluid rainforest" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={banner4} className="img-fluid rainforest" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={banner5} className="img-fluid rainforest" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;
