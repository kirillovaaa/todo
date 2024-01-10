import React, { useState } from "react";
import ToDo from "../ToDo/ToDo";
import Popup from "../Popup/Popup";

const App = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  function openPopup() {
    setIsOpenPopup(true);
  }

  function closePopup() {
    setIsOpenPopup(false);
  }

  return (
    <main>
      <ToDo onClickOpen={openPopup} />
      <Popup isOpen={isOpenPopup} onClose={closePopup} />
    </main>
  );
};

export default App;
