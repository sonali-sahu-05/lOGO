import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  // for the toggle of the button
  const [btnName, setBtnName] = useState("light");

  const handleButtonClick = () => {
    // Toggle between "light" and "dark"
    setBtnName(btnName === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="flex justify-between p-6">
        <h1 className="text-3xl font-bold">LOGO</h1>
        <ul className="flex justify-between gap-10 font-medium items-center">
          <li>
            <Link to="/men">MEN</Link>
          </li>
          <li>
            <Link to="/women">WOMEN</Link>
          </li>
          <li>
            <Link to="/kids">KIDS</Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>
          <li>
            <button
              onClick={handleButtonClick}
              className="border rounded   bg-purple-600     text-white              px-4 py-2"
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
