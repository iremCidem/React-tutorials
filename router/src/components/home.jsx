import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Home component</h1>
    </div>
  );
};

export default Home;
