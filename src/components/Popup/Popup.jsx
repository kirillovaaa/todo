import React, { useState } from "react";
import "./Popup.css";
import closeIcon from "../../images/close-icon.svg";

const Popup = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form className={`popup ${isOpen && "popup_opened"}`} onSubmit={onSubmit}>
      <div className="popup__window">
        <h2 className="popup__heading">Edit Option</h2>
        <div className="popup__input-container">
          <h3 className="popup__input-title">Label Text</h3>
          <input
            className="popup__input"
            type="text"
            name="name"
            value={name}
            placeholder=""
            minLength="2"
            maxLength="30"
            required={true}
            onChange={handleChange}
          />
        </div>
        <button
          className="popup__close-button"
          type="button"
          id="popup-profile-close"
          onClick={onClose}
        >
          <img className="popup__close-icon" src={closeIcon} alt="Закрыть" />
        </button>

        <button className="popup__save-button" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default Popup;
