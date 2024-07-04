import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Footer() {

  return (
    <div className="footer">
      <div className="bg-bluegray-900 text-gray-100 p-1 flex justify-content-between lg:justify-content-between center align-items-center flex-wrap">
        <div
          className="shadow-1 p-1 h-full flex flex-row"
          style={{ borderRadius: "6px" }}
        >
          <div className="block text-center p-2 m-1">Footer</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
