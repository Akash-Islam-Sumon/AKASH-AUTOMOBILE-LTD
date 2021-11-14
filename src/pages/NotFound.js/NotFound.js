import Button from "@restart/ui/esm/Button";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ backgroundColor: "orchid" }}>
      <img src="https://i.ibb.co/KKKtYhZ/images-2.png" alt="" />
      <h4>NotFOund</h4>
      <NavLink to="/home">
        <Button>Back Home</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;
