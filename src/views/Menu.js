import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Menu() {
  const auth = useAuth();

  const routes = [];
  routes.push({
    to: "/",
    text: "Home",
    private: false,
  });
  routes.push({
    to: "/blog",
    text: "Blog",
    private: false,
  });
  routes.push({
    to: "/profile",
    text: "Profile",
    private: true,
  });
  routes.push({
    to: "/login",
    text: "LogIn",
    private: false,
    publicOnly: true
  });

  routes.push({
    to: "/logout",
    text: "LogOut",
    private: true,
  });

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;
          return (
            <li key={route.to}>
              <NavLink
                to={route.to}
                style={({ isActive }) => ({
                  color: isActive ? "gray" : "blue",
                })}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* <li> */}
      {/* <Link to="/">Home</Link> */}
      {/* <NavLink to="/" style={({isActive})=>({color: isActive ? 'gray' : 'blue'})}>Home</NavLink> */}

      {/* </li> */}
      {/* <li> */}
      {/* <Link to="/blog">Blog</Link> */}
      {/* <NavLink to="/blog" style={({isActive})=>({color: isActive ? 'gray' : 'blue'})}>Blog</NavLink> */}
      {/* </li> */}
      {/* <li> */}
      {/* <Link to="/profile">Profile</Link> */}
      {/* <NavLink to="/profile" style={({isActive})=>({color: isActive ? 'gray' : 'blue'})}>Profile</NavLink> */}
      {/* </li> */}
    </nav>
  );
}
export default Menu;
