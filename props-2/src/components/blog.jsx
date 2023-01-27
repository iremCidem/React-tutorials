const Blog = ({ datas, handleDelete }) => {
  const special = datas.filter((veri) => veri.author === "kristin hannah");
  return (
    <div>
      {special.map((veri) => (
        <p>
          Book: {veri.bookname}, Page: {veri.page}
          <button onClick={() => handleDelete(veri.id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Blog;
