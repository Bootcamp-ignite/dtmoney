import React, { useState } from "react";
import Modal from "react-modal";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

const App: React.FC = () => {
  const [isOpenNewTransactionModal, setIsOpenNewTransactionModal] = useState(
    true
  );

  function handleCloseNewTransactionModal() {
    setIsOpenNewTransactionModal(false);
  }

  function handleOpenNewTransactionModal() {
    setIsOpenNewTransactionModal(true);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isOpenNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>Modal</h1>
      </Modal>
    </>
  );
};

export default App;
