import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageProduct = () => {
  const [delevary, setDelevary] = useState(false);
  const [manegeProduct, setManageProduct] = useState([]);
  console.log(manegeProduct);
  useEffect(() => {
    fetch("https://safe-taiga-87363.herokuapp.com/order")
      .then((res) => res.json())
      .then((result) => setManageProduct(result));
  }, [delevary]);
  const handleDelevaryOrder = (id) => {
    fetch(`https://safe-taiga-87363.herokuapp.com/orderDone/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          setDelevary(!delevary);
        }
      });
  };
  return (
    <div>
      <h2>Total order product : {manegeProduct.length}</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>Status</th>
          </tr>
        </thead>
        {manegeProduct.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.email}</td>
              <td>{pd.img}</td>
              <td>
                <Button className="bg-warning">Prnding</Button>
                <Button
                  onClick={() => handleDelevaryOrder(pd._id)}
                  className="bg-success"
                >
                  Done
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageProduct;
