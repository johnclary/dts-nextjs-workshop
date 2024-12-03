import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import DataFetchCard from "@/components/DataFetchCard";
import MathCard from "@/components/MathCard";
import NameCard from "@/components/GreetingCard";
import GenericsCard from "@/components/GenericsCard";
import StatefulCard from "@/components/StatefulCard";

export default function Page() {
  return (
    <Container>
      <Navbar className=" mb-3">
        <NavbarBrand>
          <Image
            alt="DTS logo"
            src="/img/dts.png"
            className="logo-spin"
            height={75}
          />
        </NavbarBrand>
        <span className="display-6">NextJS + Typescript Demo</span>
      </Navbar>
      <Row>
        <Col md={6} lg={4} className="mb-3">
          <MathCard />
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <NameCard />
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <GenericsCard />
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <StatefulCard />
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <DataFetchCard />
        </Col>
      </Row>
    </Container>
  );
}
