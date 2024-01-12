import React from "react";
import "../ToDo/ToDo.css";
import plus from "../../images/plus.svg";
import pencil from "../../images/pencil.svg";
import Card from "../Card/Card";

function List({
  id,
  name,
  cards,
  onClickEdit,
  onClickAddCard,
  onClickEditCard,
}) {
  return (
    <div className="todo__item">
      <div className="todo__item-container">
        <h2 className="todo__item-heading">{name}</h2>
        <button
          className="todo__item-button"
          type="button"
          onClick={() => onClickEdit(id)}
        >
          <img src={pencil} className="todo__item-image" alt="pencil" />
        </button>
      </div>

      <div>
        {cards.map((card) => (
          <Card key={card.id} onClick={() => onClickEditCard(id, card.id)}>
            {card.text}
          </Card>
        ))}
      </div>

      <button
        className="todo__button"
        type="button"
        onClick={() => onClickAddCard(id)}
      >
        <img src={plus} className="todo__button-image" alt="plus" />
        Add Item
      </button>
    </div>
  );
}

export default List;
