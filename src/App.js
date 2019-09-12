import React from "react";
import "./App.css";
import NavMenu from "./NavMenu";
const menuItem = { link: "#", title: "About us", isActive: true };
const menuItem2 = { link: "#", title: "Contact", isActive: false };
const menuItemList = [menuItem, menuItem2, menuItem];
function App() {
  return (
    <div className="App">
      <NavMenu listOfItems={menuItemList} />
    </div>
  );
}

export default App;
