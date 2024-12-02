import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardHeader from "react-bootstrap/CardHeader";

interface Person {
  first: string;
  last: string;
  middle?: string;
}

interface Dog {
  name: string;
  color: string;
}

const john = {
  first: "John",
  last: "C",
};

const stan = {
  first: "Stan",
  last: "Q",
};

const sylvie = {
  name: "Sylvie",
  color: "brown",
};

const fay = {
  name: "Fay",
  color: "tan",
};

const makeArrayOfPeople = (name1: Person, name2: Person) => [name1, name2];

const makeArrayOfObjects = (name1: object, name2: object) => [name1, name2];

const makeArrayOfLikeObjects = <T extends object>(name1: T, name2: T) => {
  return [name1, name2];
};

export default function ArrayCard() {
  const people = makeArrayOfPeople(john, stan);

  const peopleAndDogs = makeArrayOfObjects(stan, sylvie);

  const definitelyDogs = makeArrayOfLikeObjects<Dog>(sylvie, fay);

  return (
    <Card>
      <CardHeader>Generic types!</CardHeader>
      <CardBody>
        <h5>People</h5>
        <h6>{people.map((n) => n.first).join(", ")}</h6>
        <h5>People and/or dogs</h5>
        <h6>{JSON.stringify(peopleAndDogs)}</h6>
        <h5>Definitely dogs</h5>
        <h6>{definitelyDogs.map((n) => n.name).join(", ")}</h6>
      </CardBody>
    </Card>
  );
}
