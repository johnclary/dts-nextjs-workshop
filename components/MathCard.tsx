import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardHeader from "react-bootstrap/CardHeader";

const addTwo = (value: number) => {
  return value + 2;
};

interface MathCardProps {
  value: number;
}

export default function MathCard({ value }: MathCardProps) {
  //   const value = 2;
  const result = addTwo(value);

  return (
    <Card>
      <CardHeader>Math card</CardHeader>
      <CardBody>
        <span>{`${value} + 2 = ${result}`}</span>
      </CardBody>
    </Card>
  );
}
