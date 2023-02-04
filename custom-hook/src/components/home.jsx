import useFetch from "../useFetch";

const Home = () => {
  const {
    data: blogs,
    message,
    error,
  } = useFetch(" http://localhost:3000/blogs");
  return (
    <div>
      <h1>BLOG REACT</h1>
      {message && <p>Loading...</p>}
      {error && <div>{error}</div>}
      {blogs?.map((blog) => (
        <div>
          <h3>
            Author: {blog.author} , Title: {blog.title}
          </h3>

          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
//custom hoooks oluşturarak bu fonksiyonu tekrar kullanılabilir hale getireceğiz.
