import Card from "react-bootstrap/Card";

function TrendingNow({ image, ranking }) {
  return (
    <div>
      <Card style={{ width: "200px" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{
            borderRadius: "0.375rem",
            height: "100%",
          }}
        />
        <h1
          className="display-1 fw-semibold"
          style={{
            position: "absolute",
            bottom: "0",
            color: "white",
          }}
        >
          {ranking}
        </h1>
      </Card>
    </div>
  );
}

export default TrendingNow;
