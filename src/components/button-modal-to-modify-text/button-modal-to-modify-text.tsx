import React from "react";

export function ButtonModalToModifyText(props: any) {
  /**
   * Type of the object
   * field to modify
   * new value
   */

  const updateText = () => {
    console.log(JSON.stringify(props));
  };

  return (
    <span className="modal-content">
      <button onClick={updateText}>Modify</button>
    </span>
  );
}
