import React from "react";
import "./Popup.css";
import closeIcon from "../../images/close-icon.svg";

const Popup = ({ isOpen, onClose }) => {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__window">
        <h2 className="popup__heading">Edit Option</h2>
        <div className="popup__input-container">
          <h3 className="popup__input-title">Label Text</h3>
          <input
            className="popup__input"
            type="text"
            name="name"
            placeholder=""
            minLength="2"
            maxLength="30"
            required={true}
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
    </div>
  );
};

export default Popup;
