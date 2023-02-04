import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="title" to="/">
        HomePage
      </Link>
      <div className="links">
        <Link className="link" to="/about">
          Sign up
        </Link>
        <Link className="link" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
