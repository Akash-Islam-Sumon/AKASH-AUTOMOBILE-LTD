import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@restart/ui/esm/Button";
import { Alert } from "@mui/material";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [adminSuccess, setAdminSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleMakeAdmin = (e) => {
    const user = { email };
    e.preventDefault();
    fetch("https://safe-taiga-87363.herokuapp.com/user/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setAdminSuccess(true);
          setEmail("");
          console.log(data);
        }
      });
  };
  return (
    <div style={{ backgroundColor: "orange" }}>
      <div className="row">
        <div className="col col-md-6">
          <h2>Make An Admin </h2>
          <form onSubmit={handleMakeAdmin}>
            <TextField
              style={{ width: "80%" }}
              id="standard-basic"
              label="Email"
              type="email"
              onBlur={handleOnBlur}
              variant="standard"
            />

            <Button
              style={{ width: "80%", margin: "20px" }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </form>
          {adminSuccess && (
            <Alert severity="success">Admin created successfully !!</Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
