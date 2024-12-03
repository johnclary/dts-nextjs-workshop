import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Page() {
  return (
    <Container>
      <Row>
        <Col md={6} lg={4}>
          <p>Welcome to the pizza page</p>
        </Col>
      </Row>
    </Container>
  );
}
