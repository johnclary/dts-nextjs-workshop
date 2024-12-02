"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardHeader from "react-bootstrap/CardHeader";

export default function StatefulCard() {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <CardHeader>Stateful</CardHeader>
      <CardBody>
        <h6>{`The count is ${count}`}</h6>
        <div className="d-flex justify-content-between">
          <Button
            className="flex-fill mx-1"
            onClick={() => setCount(count + 1)}
          >
            +1
          </Button>
          <Button
            variant="outline-danger"
            className="flex-fill mx-1"
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
