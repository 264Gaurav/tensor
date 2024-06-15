import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../auth/authSlice";

const CustomerServiceForm = () => {
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm();

  const user = useSelector(selectLoggedInUser);

  const onSubmit = async (data) => {
    // Handle form submission logic here
    console.log("Form data:", data, "USer is ", user);

    await axios
      .post("http://localhost:8080/services/createquery", {
        formData: data,
        googleId: user.sub,
      })
      .then((res) => {
        console.log(res.data);
      });

    // Reset the form fields after submission
    setValue("category", "");
    setValue("comment", "");
  };

  return (
    <div className="container mt-5">
      <h2>Customer Service Request Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className={`form-select ${errors.category ? "is-invalid" : ""}`}
            {...register("category", { required: "Please select a category" })}
          >
            <option value="" disabled>
              Select a category
            </option>
            {/* General Queries, Product Features Queries, Product Pricing Queries, Product Feature
Implementation Requests */}
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
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Additional Comments
          </label>
          <textarea
            id="comment"
            className={`form-control ${errors.comment ? "is-invalid" : ""}`}
            {...register("comment", {
              required: "Please provide additional comments",
            })}
          ></textarea>
          <div className="invalid-feedback">
            {errors.comment && errors.comment.message}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default CustomerServiceForm;
