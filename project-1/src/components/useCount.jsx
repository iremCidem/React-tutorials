import { useEffect, useState } from "react";

const useCount = (initial) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setTimeout(() => {
      count !== 0 && setCount(count - 1);
    }, 1000);
  }, [count]);

  return { count };
};
export default useCount;
