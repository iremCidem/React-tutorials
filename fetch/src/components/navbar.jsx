import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="btn">
        Blogs
      </Link>
      <Link to="/blog" className="btn">
        Send Blog
      </Link>
    </div>
  );
};

export default Navbar;
