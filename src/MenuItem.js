import React from "react";
function MenuItem(props) {
  return (
    <a
      className="nav-item"
      style={{ color: props.item.isActive ? "#6bb09d" : "black" }}
    >
      {props.item.title}
    </a>
  );
}
export default MenuItem;
