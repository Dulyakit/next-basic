import React from "react";

function Header(props) {
  return (
    <>
      <div className="card">
        <h1 className="text-title">{props.title}</h1>
      </div>
    </>
  );
}

export default Header;
