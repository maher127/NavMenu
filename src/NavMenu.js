import React from "react";
import MenuItem from "./MenuItem";
function NavMenu(props) {
  return (
    <div className="nav-menu">
      {props.listOfItems.map((el, i) => (
        <MenuItem item={el} key={i} />
      ))}
    </div>
  );
}
export default NavMenu;
