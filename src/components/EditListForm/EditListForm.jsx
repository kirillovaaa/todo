import React, { useState } from "react";
import "../Popup/Popup.css";

const EditListForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name);
    setName("");
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <div className="popup__input-container">
        <h3 className="popup__input-title">Text</h3>
        <input
          className="popup__input"
          type="text"
          name="name"
          placeholder=""
          minLength="2"
          maxLength="30"
          required={true}
          value={name}
          onChange={handleChange}
        />
      </div>

      <button className="popup__save-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default EditListForm;
