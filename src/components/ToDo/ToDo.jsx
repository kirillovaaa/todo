import React from "react";
import "./ToDo.css";
import List from "../List/List";

function ToDo({ boardState, onEditListName, onClickAddCard, onClickEditCard }) {
  return (
    <section className="todo">
      <h1 className="todo__heading">ToDo List</h1>
      <div className="todo__items">
        {boardState.map((list) => (
          <List
            key={list.id}
            id={list.id}
            name={list.name}
            cards={list.cards}
            text={list.text}
            onClickEdit={onEditListName}
            onClickAddCard={onClickAddCard}
            onClickEditCard={onClickEditCard}
          />
        ))}
      </div>
    </section>
  );
}

export default ToDo;
