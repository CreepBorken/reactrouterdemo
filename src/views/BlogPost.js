import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useAuth } from "../utils/auth";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const returnToBlug = () => {
    navigate("/blog");
    //navigate('-1'); // Go Back once based on website history.
  };

  //const isDeleteActive = auth.user?.isAdmin || blogpost.author === auth.user?.username;
  const isDeleteActive = auth.user?.rolelist[0].isAdmin || blogpost.author === auth.user?.username;
  
  const isEditionActive = auth.user?.rolelist[0].isEditor || blogpost.author === auth.user?.username;
  
  const ver = () => {
    console.log(auth.user?.rolelist);
  }

  return (
    <>
      <h1>{blogpost.title}</h1>
      <button onClick={returnToBlug}>Volver a blog</button>
      <h4>{blogpost.content}</h4>
      <h5>{blogpost.author}</h5>

      {/* <p>isEditionActive: {isEditionActive}</p>
      <p>isDeleteActive: {isDeleteActive}</p> */}

      {isEditionActive && <button>Editar</button>}
      {isDeleteActive && <button>Eliminar</button>}
      {/* <button onClick={ver}>Ver</button> */}
    </>
  );
}

export default BlogPost;
