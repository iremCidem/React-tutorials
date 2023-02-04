import { useEffect, useState } from "react";
import Child from "./child";
const Home = () => {
  const [datas, setDatas] = useState([
    { text: "alt metin alt başlık içerik", id: 1 },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      id: 2,
    },
  ]);
  const handleDelete = (id) => {
    const filtered = datas.filter((data) => data.id !== id);
    setCount(filtered);
  };
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("deneme");
  }, []);
  return (
    <div className="parent">
      <h1>HOME COMPONENT</h1>
      {datas.map((data) => (
        <p>
          {data.text}
          <button onClick={() => handleDelete(data.id)}>X</button>
        </p>
      ))}

      <Child handleDelete={handleDelete} datas={datas} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count up
      </button>
      <p>{count}</p>
    </div>
  );
};

export default Home;
