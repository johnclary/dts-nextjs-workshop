// "use client";
// import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardHeader from "react-bootstrap/CardHeader";

// const getData = async () => {
//   return fetch(
//     "https://data.austintexas.gov/resource/b4k4-adkb.geojson?$limit=10"
//   ).then((data) => data);
// };

export default function DataFetchCard() {
  return (
    <Card>
      <CardHeader>Fetch card</CardHeader>
      <CardBody>
        <span>Hi</span>
      </CardBody>
    </Card>
  );
}
