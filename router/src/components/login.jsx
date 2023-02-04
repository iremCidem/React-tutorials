import { useState } from "react";

const Login = () => {
  const [name, setName] = useState(" ");
  const [password, setPassword] = useState();
  const [select, setSelect] = useState("Female");
  function handleSubmit(e) {
    const datas = { name, password, select }; //yeni bir obje yarattık,key değerleri bunlar
    console.log(datas);
    e.preventDefault();
  }
  return (
    <div className="form-div">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className="select"
          onChange={(e) => setSelect(e.target.value)}
          value={select}
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
//butona basıldığında gerçekleşmesi için forma submit event kullanıyoruz.
