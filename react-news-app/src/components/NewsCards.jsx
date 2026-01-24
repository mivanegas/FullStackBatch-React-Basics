import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/actions/news";
import { useParams } from "react-router";

function NewsCards(props) {
  const news = useSelector((store) => store.news.articles);
  const dispatch = useDispatch();
  const { category } = useParams();

  const fallbackImage =
    "https://images.unsplash.com/36/fVSwTG05QIaE9FN7tLQ5_IMG_1122.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Updates news shown to match tab selected
  useEffect(() => {
    dispatch(fetchNews(category));
  }, [category]);

  return (
    <Container>
      <Row>
        {news.map((singleNews, index) => (
          <Col className="my-2" key={index}>
            <Card style={{ width: "18rem", margin: "1em auto" }}>
              <Card.Img
                variant="top"
                src={singleNews.urlToImage || fallbackImage}
                style={{ height: "160px" }}
              />
              <Card.Body>
                <Card.Title style={{ minHeight: "90px" }} ls>
                  {/* Limiting title to 90 characters */}
                  {singleNews.title && singleNews.title.length > 70
                    ? `${singleNews.title.slice(0, 70)}...`
                    : singleNews.title}
                </Card.Title>

                <Card.Text style={{ minHeight: "130px" }}>
                  {/* Limiting description to 150 characters */}
                  {singleNews.description && singleNews.description.length > 150
                    ? `${singleNews.description.slice(0, 150)}...`
                    : singleNews.description}
                </Card.Text>
                <div className="text-center">
                  <a
                    href={singleNews.url}
                    className="btn btn-dark w-40 "
                    target="_blank"
                  >
                    Read more
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsCards;
