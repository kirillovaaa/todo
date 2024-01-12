import React, { useState } from "react";
import ToDo from "../ToDo/ToDo";
import Popup from "../Popup/Popup";

const BOARD_DATA = [
  {
    id: "list-1",
    name: "ToDo",
    cards: [{ id: "card-1", text: "Card content" }],
  },
  {
    id: "list-2",
    name: "In Progress",
    cards: [
      { id: "card-1", text: "Card content" },
      { id: "card-3", text: "Card content" },
    ],
  },
  {
    id: "list-3",
    name: "Done",
    cards: [
      { id: "card-1", text: "Card content" },
      { id: "card-2", text: "Card content" },
      { id: "card-3", text: "Card content" },
    ],
  },
];

const App = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [boardState, setBoardState] = useState(BOARD_DATA);

  function openPopup(listId) {
    setIsOpenPopup(listId);
  }

  function closePopup() {
    setIsOpenPopup(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const listIndex = boardState.findIndex((list) => list.id === isOpenPopup);
    const newBoardState = boardState;
    newBoardState[listIndex].name = e.target.name.value;
    setBoardState(newBoardState);
    closePopup();
  }

  return (
    <main>
      <ToDo boardState={boardState} onEditListName={openPopup} />
      <Popup
        isOpen={isOpenPopup}
        onClose={closePopup}
        onSubmit={handleSubmit}
      />
    </main>
  );
};

export default App;
