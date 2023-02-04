import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(true);
  const [error, setError] = useState(null);
  //hookları kullandığımız bölge burası olduğu için kendi hookumuzu da burada kullanacağız.
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("fetching is failure because of resource"); //burada error mesajını aşağıdaki catch ile yakalayabilmek için fırlatıyoruz.
          }
          return res.json();
        }) //javascript objesi olarak almaya çalışıyoruz,promise yapısı döndüğü için tekrar then ile alıyoruz.
        .then((data) => {
          setMessage(false);
          setData(data);
        })
        .catch((err) => setError(err.message));
    }, 1000);
  }, [url]);
  return { data, message, error };
};

export default useFetch;
//customhook oluştururken use ile başlatmalıyız.
