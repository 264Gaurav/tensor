import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../auth/authSlice";

export const SeeQueries = () => {
  const [result, setResult] = useState([]);
  const user = useSelector(selectLoggedInUser);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission logic here
    console.log("Form data:", data);
    await axios
      .post("http://localhost:8080/services/seequery", {
        googleId: user.sub,
        category: data.category,
      })
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      });
    // Reset the form fields after submission
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" container container-fluid text-center   mb-3">
        <h1 className="form-label">Select Category to see Queries</h1>
        <select
          id="category"
          className={`form-select ${errors.category ? "is-invalid" : ""}`}
          {...register("category", { required: "Please select a category" })}
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="General Queries">General Queries</option>
          <option value="Product Features Queries">
            Product Features Queries
          </option>
          <option value="Product Pricing Queries">
            Product Pricing Queries
          </option>
          <option value=" Product Feature"> Product Feature</option>
          <option value="Implementation Requests">
            Implementation Requests
          </option>
        </select>
        <div className="invalid-feedback">
          {errors.category && errors.category.message}
        </div>
        <button type="submit" className="btn btn-primary mt-2 ">
          Submit Request
        </button>
      </div>
      <div>
        <div
          className={
            result.length
              ? `container bg-body-tertiary`
              : `d-none container bg-body-tertiary`
          }
        >
          <h2 className="text-center"> Queries </h2>
          {result.length
            ? result.map((obj, index) => {
                return <li> {obj.comment}</li>;
              })
            : ""}
        </div>
      </div>
    </form>
  );
};
