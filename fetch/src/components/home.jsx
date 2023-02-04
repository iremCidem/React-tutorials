import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleDelete(id) {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    });
    navigate("/blog");
  }

  const [blogs, setBlog] = useState(null);
  const [message, setMessage] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("fetching is failure because of resource"); //burada error mesajını aşağıdaki catch ile yakalayabilmek için fırlatıyoruz.
          }
          return res.json();
        }) //javascript objesi olarak almaya çalışıyoruz,promise yapısı döndüğü için tekrar then ile alıyoruz.
        .then((data) => {
          setMessage(false);
          setBlog(data);
        })
        .catch((err) => setError(err.message));
    }, 1000);
  }, []);
  return (
    <div>
      <h1>BLOG OF FRONTEND DEVELOPER</h1>
      {message && <p>Loading...</p>}
      {error && <div>{error}</div>}
      {blogs?.map((blog) => (
        <div>
          <h3>
            Author: {blog.author} , Title: {blog.title}
            <button onClick={() => handleDelete(blog.id)} className="btn">
              [X]
            </button>
          </h3>

          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
//arrayi boş bıraktım ki component sadece ilk render edildiğinde verileri çeksin.
// ? kullanım sebebimiz; fetch ile data çekme olayı component ilk render edildiğinde
//gerçekleşeceği için ve ilk durumumuz null olduğu için ilk aşamada bir null üzerinde map işlemi yapmaya çalışıyoruz.
//bunu engellemek için ? ile kullanım yerine öncesine blogs && eklersek blogs da 1 olduğunda yazacak.
//sadece message true iken loading mesajı görünsün istiyoruz - o da data yüklenene kadar.
