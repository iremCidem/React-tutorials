import Blog from "./blog";
import { useState } from "react";
const Home = () => {
  const [datas, setDatas] = useState([
    { bookname: "dönüşüm", author: "franz kafka", page: 120, id: 1 },
    { bookname: "ateşböceği", author: "kristin hannah", page: 110, id: 2 },
    { bookname: "kış bahçesi", author: "kristin hannah", page: 110, id: 3 },
  ]);
  const handleDelete = (id) => {
    const filtered = datas.filter((data) => data.id !== id);
    setDatas(filtered);
  };
  return (
    <div>
      <h1>Online Book Club</h1>
      {datas.map((data) => (
        <div>
          <p key={data.id}>
            Name: {data.bookname}, Author: {data.author}, Page: {data.page}
          </p>
        </div>
      ))}
      <h1>Kristin HANNAH</h1>
      <Blog datas={datas} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
