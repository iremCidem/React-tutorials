import Logo from "../image/React-icon.svg.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" width="60px" />
      <h3 className="navbar-title">ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
