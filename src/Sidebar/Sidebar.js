import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { FaCartShopping } from "react-icons/fa6";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <FaCartShopping className="logo" />
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
