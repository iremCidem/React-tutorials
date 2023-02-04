import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState("mario");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",

      body: JSON.stringify(blog),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigate("/");
  }

  return (
    <div className="blog">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="blog">Blog</label>
        <input
          type="text"
          name="blog"
          id="blog"
          className="input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <select
          className="select"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>

        <button className="btn">Send BLOG</button>
      </form>
    </div>
  );
}
