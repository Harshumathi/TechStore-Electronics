"use client" ;


import User from "../User";

const Signin = () => {
  return (
    <>
      <button
        className="nav-btn primary"
        onClick={() => {
          document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Shop Now
      </button>
      <User />
    </>
  );
};

export default Signin;
