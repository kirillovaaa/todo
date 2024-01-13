import React, { useEffect, useState } from "react";
import "../Popup/Popup.css";

const EditCardForm = ({ cardText, onSubmit }) => {
  const [text, setText] = useState(cardText);

  useEffect(() => {
    setText(cardText);
  }, [cardText]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(text);
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
          value={text}
          onChange={handleChange}
        />
      </div>

      <button className="popup__save-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default EditCardForm;
