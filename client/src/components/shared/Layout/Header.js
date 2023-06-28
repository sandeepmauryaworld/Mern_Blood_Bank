import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// fetch user name on header

const Header = () => {
  const navigate = useNavigate();
  // fetch user name on header
  const { user } = useSelector((state) => state.auth);

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    alert("Logout Successfulyy !");
  };

  return (
    <div>
      <nav className="navbar  ">
        <div className="container-fluid">
          <div className="navbar-brand h1">
            <BiDonateBlood color="red" /> Blood Bank App
          </div>

          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                {" "}
                <BiUserCircle /> Welcome {user?.name}
              </p>
            </li>

            <li className="nav-item mx-3 ">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
