import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";

const ExploreProducts = () => {
  const [exploreProducts, setExploreProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/exploreproduct")
      .then((res) => res.json())
      .then((result) => setExploreProducts(result));
  }, []);
  return (
    <div>
      <Navigation> </Navigation>
      <h2> Explore products : {exploreProducts.length} </h2>
      <div className="row">
        {exploreProducts.map((exploreProduct) => (
          <Card style={{ width: "20rem", margin: "10px" }}>
            <Card.Img variant="top" src={exploreProduct.img} />
            <Card.Body>
              <Card.Title>{exploreProduct.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <NavLink to={`/booking/${exploreProduct._id}`}>
                {" "}
                <Button variant="primary">READ MORE</Button>
              </NavLink>
            </Card.Body>
          </Card>
        ))}
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default ExploreProducts;
