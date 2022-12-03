import React, {useState} from "react";

export function ButtonModalToModifyText(props: any) {
  const [showModal, setShowModal] = useState(false);

  const updateText = () => {
    setShowModal(true);
    console.log(JSON.stringify(props));
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <span className="modal-content">
      <button onClick={updateText}>Modify</button>
      {showModal && (
        <span>
          Modal !<button onClick={closeModal}>close</button>
        </span>
      )}
    </span>
  );
}
