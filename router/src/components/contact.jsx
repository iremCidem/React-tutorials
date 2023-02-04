import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const Contact = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {data?.map((item) => (
        <div>
          <Link to={`/contact/${item.id}`}>{item.name}</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Contact;
//route pathi bazen değişken olabilir,routerin değişken kısmı route parameter olarak geçer.
//route parametrelerini karşılamak için useParams hooku kullanıyoruz.
/*<p>
            <strong>Name: </strong> {item.name} , <strong>Email:</strong>
            {item.email} , <strong>Phone:</strong> {item.phone}
          </p>*/
