import img from "../image/foto.jpg";
const Info = () => {
  return (
    <div className="info">
      <img src={img} alt="foto" width="100%" />
      <h1>İrem ÇİDEM</h1>
      <h3>Frontend Developer</h3>
      <h6 className="city">Eskişehir / TURKEY</h6>
      <div className="buttons">
        <button>Email</button>
        <button type="button" className="linkedin">
          Linkedln
        </button>
      </div>
    </div>
  );
};

export default Info;
