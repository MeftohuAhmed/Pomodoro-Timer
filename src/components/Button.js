/**
 * The Button component is a reusable, functional component that renders a button element.
 *
 * It accepts three props:
 * - 'title': a string that determines the button's text.
 * - 'activeClass': a string that represents any additional CSS classes the button should have when it's active.
 * - '_callback': a function to be called when the button is clicked.
 *
 * The component returns a button element.
 * - The className attribute of the button is set to the value of the 'activeClass' prop.
 * - The onClick handler of the button is set to the function passed in the '_callback' prop.
 * - The children of the button is set to the value of the 'title' prop, which is the text displayed on the button.
 *
 * Exporting the Button component allows it to be used in other parts of the application.
 */

import React from "react";

function Button({ title, activeClass, _callback }) {
  return (
    <button className={activeClass} onClick={_callback}>
      {title}
    </button>
  );
}

export default Button;
