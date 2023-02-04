import picture from "../image/logo192.png";

const Child = ({ handleDelete, datas }) => {
  return (
    <div className="child">
      <h1>child component</h1>
      <img src={picture} alt="logo" />
      {datas.map((data) => (
        <p>
          {data.text} <button onClick={() => handleDelete(1)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Child;
