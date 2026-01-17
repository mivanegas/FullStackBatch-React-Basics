import Carousel from "react-bootstrap/Carousel";
import quetzal2 from "../assets/quetzal2.png";
import guate from "../assets/guate.png";
import guate2 from "../assets/guate2.png";
import library from "../assets/library.png";
import quetzal3 from "../assets/quetzal3.png";
import guate3 from "../assets/guate3.png";
import store from "../assets/store.png";
import store2 from "../assets/store2.png";

function About() {
  return (
    <div>
      <h1>Who We Are</h1>
      <p>
        Quetzal Grove Books was created for readers who believe stories are more
        than entertainment — they are a form of freedom.
      </p>
      <p>
        Inspired by Guatemala, our roots run deep in Latin culture, oral
        tradition, and the belief that stories are meant to be shared. Our name
        comes from the quetzal, Guatemala’s national bird and a powerful symbol
        of freedom, dignity, and movement. Like the quetzal in flight, we
        believe books have the power to carry us beyond borders, across
        generations, and into new ways of seeing the world.
      </p>
      <p>
        Our shelves reflect that spirit. You’ll find thoughtfully chosen books —
        well-loved favorites, new discoveries, and unexpected gems — alongside
        stories that uplift diverse voices, especially those shaped by Latin
        American culture, migration, resilience, and imagination. All of our
        books are offered at fair, grounded prices, because access to stories
        should never feel exclusive.
      </p>
      <p>
        Quetzal Grove is more than a bookstore. It’s a gathering place, a quiet
        refuge, and a celebration of culture and curiosity. A grove where
        stories take root, identities are honored, and readers are free to
        wander, dream, and take flight.
      </p>
      <Carousel>
        <Carousel.Item>
          <img src={quetzal2} className="img-fluid rainforest" />
          <Carousel.Caption>
            <h3 className="fw-bold dynamic-text-shadow">
              Where freedom is found between the pages 🦋
            </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={guate}
            className="img-fluid"
            style={{ height: "400px", width: "min-content", marginTop: "20px" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={library}
            className="img-fluid"
            style={{ height: "400px", width: "min-content", marginTop: "20px" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={guate2}
            className="img-fluid"
            style={{ height: "400px", width: "min-content", marginTop: "20px" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={quetzal3}
            className="img-fluid"
            style={{ height: "400px", width: "min-content", marginTop: "20px" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={guate3}
            className="img-fluid"
            style={{ height: "400px", width: "min-content", marginTop: "20px" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={store}
            className="img-fluid"
            style={{ height: "400px", width: "min-content", marginTop: "20px" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={store2}
            className="img-fluid"
            style={{ height: "400px", width: "min-content", marginTop: "20px" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default About;
