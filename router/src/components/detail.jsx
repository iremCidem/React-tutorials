import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  console.log(data);
  return (
    <div>
      {data && <h1>Name:{data.name} </h1>}
      {data && (
        <p>
          Email: {data.email}, Phone: {data.phone}
        </p>
      )}
    </div>
  );
};

export default Detail;
