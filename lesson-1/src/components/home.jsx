import Hooks from "../image/react-hooks.jpg";
const Home = () => {
  return (
    <div>
      <h1>REACT HOOKS</h1>
      <img src={Hooks} alt="react" height="350px" />
      <ul className="list">
        <li>Front</li>
        <li>End</li>
        <li>Developer</li>
      </ul>
    </div>
  );
};

export default Home;
