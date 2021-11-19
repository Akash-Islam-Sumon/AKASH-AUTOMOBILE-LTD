import React from "react";
import "./Review.css";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://safe-taiga-87363.herokuapp.com/addreviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("Thank you for your reviews");
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-6 review">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("img")} placeholder="Enter your image link" />
            <input {...register("name")} placeholder="Enter your name" />
            <br />
            <input
              {...register("comment")}
              placeholder="Enter your comment"
            />{" "}
            <br />
            <input
              type="number"
              {...register("rating", { min: 0, max: 5 })}
              placeholder="Enter your rating"
            />{" "}
            <br />
            <input type="submit" />
          </form>
        </div>
        <div className="col-md-6">
          <h4 style={{ marginTop: "30px" }}>
            YOUR VALAUABLE REVIEW IS MOST INPORT FOR US
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Review;

// import { Box } from "@mui/system";
// import React from "react";
// import { useForm } from "react-hook-form";
// import Navigation from "../Shared/Navigation/Navigation";

// const Review = () => {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     fetch("https://safe-taiga-87363.herokuapp.com/addreviews", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     alert("Thank you for your reviews");
//   };
//   return (
//     <Box className="form-page">
//       <Navigation />
//       <h2 style={{ marginTop: "50px" }}>Please Add Your Reviews</h2>
//       <Box className="form">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <input
//             type="description"
//             {...register("img")}
//             placeholder="Enter your img link"
//           />
//           <input {...register("name")} placeholder="Enter your name" />

//           <input
//             type="description"
//             {...register("description")}
//             placeholder="Enter your description"
//           />
//           <input
//             type="number"
//             {...register("rating", { min: 0, max: 5 })}
//             placeholder="Give rating"
//           />

//           <input
//             style={{
//               background: "#F40FDF",
//               borderRadius: "8px",
//               color: "white",
//             }}
//             type="submit"
//           />
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default Review;
