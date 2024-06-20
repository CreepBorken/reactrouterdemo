import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const returnToBlug = () => {
    navigate('/blog');    
    //navigate('-1'); // Go Back once based on website history.
  };

  return (
    <>

      <h1>{blogpost.title}</h1>
      <button onClick={returnToBlug}>Volver a blog</button>
      <h4>{blogpost.content}</h4>
      <h5>{blogpost.author}</h5>
    </>
  );
}

export default BlogPost;
