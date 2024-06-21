import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Footer() {
  const auth = useAuth();

  const routes = [];
  routes.push({
    to: "/",
    text: "Home",
    private: false,
    label: "Home",
    icon: "pi pi-star",
  });
  routes.push({
    to: "/blog",
    text: "Blog",
    private: false,
    label: "Blog",
    icon: "pi pi-star",
  });
  routes.push({
    to: "/profile",
    text: "Profile",
    private: true,
    label: "Profile",
    icon: "pi pi-star",
    visible: false,
  });
  routes.push({
    to: "/login",
    text: "LogIn",
    private: false,
    publicOnly: true,
    label: "LogIn",
    icon: "pi pi-star",
  });
  routes.push({
    to: "/logout",
    text: "LogOut",
    private: true,
    label: "LogOut",
    icon: "pi pi-star",
    visible: false,
  });

  return (
    <div className="footer">
      <div class="bg-bluegray-900 text-gray-100 p-1 flex justify-content-between lg:justify-content-between center align-items-center flex-wrap">
        <div
          className="shadow-1 p-1 h-full flex flex-row"
          style={{ borderRadius: "6px" }}
        >
          <div class="block text-center p-2 m-1">Footer</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
