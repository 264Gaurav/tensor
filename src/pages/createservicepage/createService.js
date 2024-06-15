import NavBarComponent from "../../features/navbar/components/navbarcom";
import CustomerServiceForm from "../../features/linkPages/createquery";

export const CreateServicePage = () => {
  return (
    <NavBarComponent
      children={<CustomerServiceForm></CustomerServiceForm>}
    ></NavBarComponent>
  );
};
