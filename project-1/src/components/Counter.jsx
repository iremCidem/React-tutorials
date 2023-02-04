import useCount from "./useCount";
const Counter = () => {
  const { count } = useCount(10);

  return (
    <div className="counter">
      <p>Count10</p>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
