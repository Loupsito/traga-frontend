import React, { useState } from "react";

export function ButtonModalToModifyText(props: any) {
  const [showModal, setShowModal] = useState(false);
  const [inputTextValue, setInputTextValue] = useState("");

  const openModal = () => {
    setShowModal(true);
    console.log(JSON.stringify(props));
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert("inputTextValue = " + inputTextValue);
  };

  return (
    <span className="modal-content">
      <button onClick={openModal}>Modify</button>
      {showModal && (
        <span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id={props.fieldToModify + "toModify"}
              name="fname"
              value={inputTextValue}
              placeholder={"Your new " + props.fieldToModify + "..."}
              onChange={(e) => setInputTextValue(e.target.value)}
            />
            <input type="submit" value="Validate" />
          </form>
          <button onClick={closeModal}>close</button>
        </span>
      )}
    </span>
  );
}
