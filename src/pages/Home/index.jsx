import styles from "./styles.module.css";
import { selectLoggedInUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import NavBarComponent from "../../features/navbar/components/navbarcom";
import { Homepage } from "../../features/linkPages/homepage";
import Intercom from "@intercom/messenger-js-sdk";

function Home() {
  const user = useSelector(selectLoggedInUser);

  console.log("user imported", user);
  Intercom({
    app_id: "yudd09by",
    user_id: user.sub,
    name: user.name,
    email: user.email,
    created_at: "user.createdAt",
  });

  return (
    <div className="">
      <NavBarComponent children={<Homepage></Homepage>}></NavBarComponent>
    </div>
  );
}

export default Home;
