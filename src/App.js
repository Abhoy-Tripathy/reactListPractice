import React from "react";
import HelpfulComponentTemplate from "./HelpfulComponentTemplate";
/* import your newly made react components here, before the CSS*/
import "./styles.css";
/* in the "explorer" tab on the left, you can create new JS files (in "src" folder) */
const fruits = ["🍇","🍈","🍉","🍊","🍋","🍌","🍍","🥭","🍎"]

export default function App() {
  /* this is a react component */

  /* content in the return method is what gets rendered to the webpage */
  return (
     <div className="App">
      {/* ^^^^^^^^^^^^^^ please add a className just like this, with the same name as the component, inside all your components*/}
      This is the App component (the main/root component in your website).{" "}
      <br />
      <br />
      {fruits.map(fruit => <li>{fruit}</li>)}
    </div>
  );
}
