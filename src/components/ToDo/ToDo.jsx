import React from "react";
import "./ToDo.css";
import plus from "../../images/plus.svg";
import pencil from "../../images/pencil.svg";

function ToDo({ onClickOpen }) {
  return (
    <section className="todo">
      <h1 className="todo__heading">ToDo List</h1>
      <div className="todo__items">
        <div className="todo__item">
          <div className="todo__item-container">
            <h2 className="todo__item-heading">ToDo</h2>
            <button
              className="todo__item-button"
              type="button"
              onClick={onClickOpen}
            >
              <img src={pencil} className="todo__item-image" alt="pencil" />
            </button>
          </div>
          <button className="todo__button" type="button">
            <img src={plus} className="todo__button-image" alt="plus" />
            Add Item
          </button>
        </div>
        <div className="todo__item">
          <div className="todo__item-container">
            <h2 className="todo__item-heading">In Progress</h2>
            <button
              className="todo__item-button"
              type="button"
              onClick={onClickOpen}
            >
              <img src={pencil} className="todo__item-image" alt="pencil" />
            </button>
          </div>
          <button className="todo__button" type="button">
            <img src={plus} className="todo__button-image" alt="plus" />
            Add Item
          </button>
        </div>
        <div className="todo__item">
          <div className="todo__item-container">
            <h2 className="todo__item-heading">Done</h2>
            <button
              className="todo__item-button"
              type="button"
              onClick={onClickOpen}
            >
              <img src={pencil} className="todo__item-image" alt="pencil" />
            </button>
          </div>
          <button className="todo__button" type="button">
            <img src={plus} className="todo__button-image" alt="plus" />
            Add Item
          </button>
        </div>
      </div>
    </section>
  );
}

export default ToDo;
