import { UseSelector, useSelector } from "react-redux";
import { selectLoggedInUser } from "../features/auth/authSlice";
import { Link, Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInUser);
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};
