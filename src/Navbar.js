import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <p>Encrypter</p>
      </div>
      <div className="navbar-item-content">
        <NavLink className="nav" to="/">
          <p className="navbar-item">
            Home
          </p>
        </NavLink>
        <NavLink className="nav" to="/encript">
          <p className="navbar-item">
            Encrypt
          </p>
        </NavLink>
        <NavLink className="nav" to="/decript">
          <p className="navbar-item">
            Decrypt
          </p>
        </NavLink>
        <NavLink className="nav" to="/getodd">
          <p className="navbar-item">
            GetOdd
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;