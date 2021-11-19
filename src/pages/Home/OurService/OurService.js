import React from "react";

const OurService = () => {
  return (
    <div className="container">
      <h2 style={{ margin: "80px", color: "blue" }}>WHY JOIN WITH US</h2>
      <div>
        <div className="row">
          <div className="col col-md-4">
            <img src="https://i.ibb.co/wgMPx0Y/download-4.png" alt="" />
            <h4>LOAN FICITILIES</h4>
            <h6>
              Own your dream car with Dhaka Bank car loans. Dhaka Bank offers
              uniquely tailored Car Loan product that takes the pain and hassle
              out of buying a car.
            </h6>
          </div>
          <div className="col col-md-4">
            <img
              style={{ height: "55%" }}
              src="https://i.ibb.co/LrRqJ81/wwwes-2.png"
              alt=""
            />

            <h4>THREE YEAR FREE SERVICE</h4>
            {/* https://i.ibb.co/9pPwwhj/car-service-ad-2.jpg */}
            <h6>
              Car Repair and Services · Preventive Maintenance Service. To keep
              your car fine and running, we provide a regular check-up which
              will avoid your car from facing ..
            </h6>
          </div>
          <div className="col-md-4">
            <img
              style={{ width: "50%" }}
              src="https://i.ibb.co/TMhRccv/Bangladesh-road-sign-A35-svg.png"
              alt=""
            />

            <h4> ROAD PERMIT PAPER</h4>
            <h6>
              An apex organisation under the Central Government, is entrusted
              with the task of formulating and administering, in consultation
              with other Central .
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
