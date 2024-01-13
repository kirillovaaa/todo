import React, { useState } from "react";
import ToDo from "../ToDo/ToDo";
import Popup from "../Popup/Popup";
import EditListForm from "../EditListForm/EditListForm";
import EditCardForm from "../EditCardForm/EditCardForm";

const BOARD_DATA = [
  {
    id: "list-1",
    name: "ToDo",
    cards: [{ id: "card-1", text: "Задеплоить первую версию и протестить" }],
  },
  {
    id: "list-2",
    name: "In Progress",
    cards: [
      { id: "card-1", text: "Сделать защиту аккаунта" },
      { id: "card-3", text: "Сделать кнопку сабмита формы в попапе карточки" },
    ],
  },
  {
    id: "list-3",
    name: "Done",
    cards: [
      { id: "card-1", text: "Сверстать доску" },
      { id: "card-2", text: "Сверстать карточку" },
      { id: "card-3", text: "Сверстать список" },
    ],
  },
];

const App = () => {
  const [isOpenListPopup, setIsOpenListPopup] = useState(false);
  const [isOpenCardPopup, setIsOpenCardPopup] = useState(false);
  const [boardState, setBoardState] = useState(BOARD_DATA);

  function openListPopup(listId) {
    setIsOpenListPopup(listId);
  }
  function openCardPopup({ listId, cardId, text }) {
    setIsOpenCardPopup({ listId, cardId, text });
  }

  function closePopups() {
    setIsOpenListPopup(false);
    setIsOpenCardPopup(false);
  }

  function handleSubmitListForm(name) {
    const listIndex = boardState.findIndex(
      (list) => list.id === isOpenListPopup
    );
    const newBoardState = boardState;
    newBoardState[listIndex].name = name;
    setBoardState(newBoardState);
    closePopups();
  }

  function handleSubmitCardForm(text) {
    console.log(text);
    closePopups();
  }

  return (
    <main>
      <ToDo
        boardState={boardState}
        onEditListName={openListPopup}
        onClickEditCard={openCardPopup}
      />

      <Popup isOpen={isOpenListPopup} onClose={closePopups}>
        <EditListForm onSubmit={handleSubmitListForm} />
      </Popup>

      <Popup isOpen={isOpenCardPopup} onClose={closePopups}>
        <EditCardForm
          cardText={isOpenCardPopup?.text}
          onSubmit={handleSubmitCardForm}
        />
      </Popup>
    </main>
  );
};

export default App;
