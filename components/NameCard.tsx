import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardHeader from "react-bootstrap/CardHeader";

interface Name {
  first: string;
  last: string;
  middle?: string;
}

const simpleName = "john";

const fancyName: Name = {
  first: "John",
  last: "C",
};

const getSimpleGreeting = (name: string) => `Hello, ${name}!`;

const getFancyGreeting = (name: Name) =>
  `Hello, ${name.first} ${name.middle ? name.middle : ""} ${name.last}!`;

export default function NameCard() {
  const simpleGreeting = getSimpleGreeting(simpleName);
  const fancyGreeting = getFancyGreeting(fancyName);
  return (
    <Card>
      <CardHeader>Greeting card</CardHeader>
      <CardBody>
        {/* simple greeting */}
        <h6>{simpleGreeting}</h6>
        {/* fancy greeting */}
        <h6>{fancyGreeting}</h6>
      </CardBody>
    </Card>
  );
}
