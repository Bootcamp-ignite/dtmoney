import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import NewTransactionModal from "./components/NewTransactionModal";

const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
};

export default App;
