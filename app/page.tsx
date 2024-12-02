import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import NavBarBrand from "react-bootstrap/NavBarBrand";
import MathCard from "@/components/MathCard";
import NameCard from "@/components/NameCard";
import GenericsCard from "@/components/GenericsCard";
import StatefulCard from "@/components/StatefulCard";

export default function Page() {
  return (
    <Container>
      <Navbar className=" mb-3">
        <NavBarBrand>
          <Image
            alt="DTS logo"
            src="/img/dts.png"
            className="logo-spin"
            height={75}
          />
        </NavBarBrand>
        <span className="display-6">NextJS + Typescript Demo</span>
      </Navbar>
      <Row>
        <Col md={6} lg={4}>
          <MathCard />
        </Col>
        <Col md={6} lg={4}>
          <NameCard />
        </Col>
        <Col md={6} lg={4}>
          <GenericsCard />
        </Col>
        <Col md={6} lg={4}>
          <StatefulCard />
        </Col>
      </Row>
    </Container>
  );
}
