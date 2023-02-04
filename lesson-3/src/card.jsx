const Card = (props) => {
  const colors = ["blue", "pink", "yellow", "black"];
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <h5>{props.title}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        error impedit reprehenderit. Accusantium aspernatur adipisci quam
        sapiente! Dolore, praesentium accusantium.
      </p>
      <button className="btn">Linkedln</button>
      {colors.map((color) => {
        <h2>{color}</h2>;
      })}
    </div>
  );
};

export default Card;
