import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="links">
      <Link className="button" to="/">
        HomePage
      </Link>
      <Link className="button" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
