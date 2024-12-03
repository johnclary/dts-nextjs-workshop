"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardHeader from "react-bootstrap/CardHeader";
import { z } from "zod";

type Camera = {
  camera_id: string;
  location_name: string;
  camera_status: string;
};

const cameraDataSchema = z.array(
  z.object({
    camera_id: z.string(),
    location_name: z.string(),
    camera_status: z.string(),
  })
);

const validateData = (data: unknown) => cameraDataSchema.parse(data);

export default function DataFetchCard() {
  const [data, setData] = useState<null | Camera[]>(null);

  if (data) {
    try {
      validateData(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Card>
      <CardHeader>Fetch card</CardHeader>
      <CardBody>
        <Button
          onClick={() => {
            fetch(
              "https://data.austintexas.gov/resource/b4k4-adkb.json?$limit=10&$select=camera_id,location_name,camera_status"
            )
              .then((res) => res.json())
              .then((data) => setData(data));
          }}
        >
          Fetch data
        </Button>
      </CardBody>
    </Card>
  );
}
