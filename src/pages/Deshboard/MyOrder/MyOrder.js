import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [controlOrder, serControlOrder] = useState(false);
  useEffect(() => {
    fetch(`https://safe-taiga-87363.herokuapp.com/myorders/${user.email}`)
      .then((res) => res.json())
      .then((result) => setOrders(result));
  }, [controlOrder]);

  const handleCancleOrder = (_id) => {
    alert("Are your sure for delete");
    fetch(`https://safe-taiga-87363.herokuapp.com/cancelorder/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          serControlOrder(true);
        }
      });
  };
  return (
    <div>
      <h3>MYORDER LIST : {orders.length}</h3>
      {
        <div className="row order">
          {orders.map((order) => (
            <div className="col-md-5">
              <div className="imgeBorder">
                <img src={order.img} alt="" />
              </div>
              <h3>{order.name}</h3>
              <button
                className="btn btn-danger"
                onClick={() => handleCancleOrder(order._id)}
              >
                CANCLE ORDER
              </button>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default MyOrder;
