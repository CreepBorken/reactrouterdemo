import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { blogdata } from "./blogdata";
import { Button } from "primereact/button";

function BlogPage({ blog }) {    
  return (
    <>
      <h1>BlogPage</h1>
      <Outlet />
      <div className="grid">
        {blogdata.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}

function BlogLink({ post }) {

    const navigate = useNavigate();

    const goto = () =>{
    // return (<Link to={`/blog/${post.slug}`}>{post.title}</Link>);

    navigate(`/blog/${post.slug}`);

}
  return (
    <div className="col-4 lg:col-3">
      <div className="p-3 h-full">
        <div
          className="shadow-2 p-3 h-full flex flex-column"
          style={{ borderRadius: "6px" }}
        >
          <div className="grid">
            <div className="col-10 lg:col-10">
              <div className="text-900 font-medium text-xl mb-2">
                {post.title}
              </div>
              <div className="text-600">{post.author}</div>
            </div>
            <div className="col-2 lg:col-2">
              <Button
                icon="pi pi-times"
                className="p-button-text p-button-warning"
              />
            </div>
          </div>

          <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
          
          <div className="grid">
            <div className="col-12 lg:col-12">                
              <Button
                label="Ver"
                icon="pi pi-eye"
                className="p-button-info w-full"
                size="small"
                onClick={goto}
              />
            </div>
            {/* <div className="col-12 lg:col-12">
              <Button
                label="Editar"
                icon="pi pi-pen-to-square"
                className="p-button-secondary p-button-outlined w-full"
                size="small"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
