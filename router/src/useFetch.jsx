import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return { data };
};
export default useFetch;
