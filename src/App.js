import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useDispatch } from "react-redux";
import { storeUser } from "./features/auth/authSlice";
import { Protected } from "./app/protected";

import "./App.css";
import NavBarComponent from "./features/navbar/components/navbarcom";
import CustomerServiceForm from "./features/linkPages/createquery";
import { SeeQueries } from "./features/linkPages/seeQueries";
import { CreateServicePage } from "./pages/createservicepage/createService";
function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `http://localhost:8080/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        console.log("This is the data after the ", data);
        console.log("This is the data that are fetched", data.user);
        setUser(data.user._json);
        dispatch(storeUser(data.user._json));
      } catch (err) {
        console.log("Error in fetching the initial user", err);
      }
    };
    getUser();
  }, []);

  return (
    <div className="">
      <Routes>
        <Route
          exact
          path="/"
          element={<Protected children={<Home></Home>}></Protected>}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/createservice"
          element={
            <Protected
              children={<CreateServicePage> </CreateServicePage>}
            ></Protected>
          }
        ></Route>
        <Route
          path="/seequeries"
          element={
            <NavBarComponent
              children={<SeeQueries></SeeQueries>}
            ></NavBarComponent>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
