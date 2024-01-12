import React from "react";
import "./Card.css";
import pencilwhite from "../../images/pencil-white.svg";
import trash from "../../images/trash.svg";

const Card = ({ text, onClickEditCard }) => {
  return (
    <section className="card">
      <div className="card__container">
        <span className="card__container-text">{text}</span>
        <div className="card__buttons">
          <button
            className="card__button"
            type="button"
            onClick={onClickEditCard}
          >
            <img
              src={pencilwhite}
              className="card__button-image"
              alt="pencilwhite"
            />
          </button>
          <button className="card__button" type="button">
            <img src={trash} className="card__button-image" alt="trash" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
