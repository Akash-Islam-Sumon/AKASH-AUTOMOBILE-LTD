import { CircularProgress } from "@mui/material";
import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const AddProduct = () => {
  const { isLoading } = useAuth();

  const [allproduct, setAllProduct] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://safe-taiga-87363.herokuapp.com/addproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  useEffect(() => {
    fetch("https://safe-taiga-87363.herokuapp.com/allproduct")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
  const handleDeletePdFromServer = (id) => {
    fetch(`https://safe-taiga-87363.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1>Add Product</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Product name"
              style={{ width: "80%", marginTop: "15px" }}
              {...register("name")}
            />
            <input
              placeholder="Product image link"
              style={{ width: "80%", marginTop: "15px" }}
              {...register("image", { required: true })}
            />
            <input
              type="number"
              placeholder="Product price"
              style={{ width: "80%", marginTop: "15px" }}
              {...register("price")}
            />

            <br />
            <input
              style={{ width: "80%", marginTop: "15px", marginBottom: "30px" }}
              type="submit"
            />
          </form>
        </div>
        <div className="col-md-2 col-sm-12 ">
          {isLoading && <CircularProgress color="success" />}
        </div>
        <div className="col-md-4 col-sm-12">
          <h1>Total Products : {allproduct.length}</h1>
          <img src="https://i.ibb.co/ScvRxYZ/images.jpg" alt="" />
        </div>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>PRODUCT NAME</th>
            <th>PRODUCT IMAGE</th>
            <th>PRODUCT PRICE</th>
            <th>PRODUCT DELETE</th>
          </tr>
        </thead>

        {allproduct.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.img}</td>
              <td>{pd.price}</td>
              <Button onClick={() => handleDeletePdFromServer(pd._id)}>
                DELETE PRODUCT
              </Button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default AddProduct;
