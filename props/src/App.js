import "./App.css";
import List from "./components/list";
import People from "./components/people";

function App() {
  const veriler = [
    { bookname: "dönüşüm", author: "franz kafka", page: 120 },
    { bookname: "ateşböceği", author: "kristin hannah", page: 110 },
    { bookname: "kış bahçesi", author: "kristin hannah", page: 110 },
  ];
  const data = [
    { bookname: "bir kadının günlüğü", author: "stefan zweif", page: 100 },
  ];
  return (
    <div className="App">
      <List datas={veriler} />

      <List datas={data} />
      <People name={"irem"} />
      <People name={"batu"} />
      <List
        datas={veriler.filter((veri) => veri.author === "kristin hannah")}
      />
    </div>
  );
}

export default App;
