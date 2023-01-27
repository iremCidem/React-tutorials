const List = (props) => {
  const veriler = props.datas;
  return (
    <h1>
      {veriler.map((veri) => (
        <div>
          <p>
            Name: {veri.bookname} , Author: {veri.author}, Page: {veri.page}
          </p>
        </div>
      ))}
    </h1>
  );
};

export default List;
