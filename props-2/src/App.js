import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("irem");
  useEffect(() => {
    alert("new page");
    //document.title = `${count} times`;
  }, [name]);
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count up
      </button>

      <Home />
      <p>you clicked {count} times</p>
      <p>{name}</p>
      <button
        onClick={() => {
          setName("batu");
        }}
      >
        change Name
      </button>
    </div>
  );
}

export default App;
//useEffect hooku component her render edildiğinde o fonksiyonu çalıştırır.
//render edilme component yenilendiğinde ayrıca o componentteki bir state değiştiğinde olur.
//useEffect fonksiyonu içinde state değiştirirsek sonsuz döngüye girer.
//yanına belirttiğimiz dependancy array ile her render edildiğinde değil de belirli bir değişiklikle çalıştırılmasını sağlayabiliriz.
//eğer ki boş bir array verirsek sadece componentin yenilenmesiyle çalışır.
//yanındaki array içine yazdığımız statein değişmesiyle fonksiyon çalışır.
