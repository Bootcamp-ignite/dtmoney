import * as Yup from "yup";
import React, { useState } from "react";
import Modal from "react-modal";
import { TransactionInput, useTransactions } from "../../hooks/useTransactions";

import {
  FormTransaction,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import closeImg from "../../assets/close.svg";
import Input from "../Input";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [transactionType, setTransactionType] = useState("income");
  const { createTransaction } = useTransactions();

  async function handleNewTransaction(data: TransactionInput) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required(),
        value: Yup.number().required(),
        category: Yup.string().required(),
        type: Yup.string().required(),
      });

      const transactionData = {
        ...data,
        value: Number(data.value),
        type: transactionType,
      };
      await schema.validate(transactionData, {
        abortEarly: false,
      });

      await createTransaction(transactionData);
      onRequestClose();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);
      }
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img alt="Fechar" src={closeImg} />
      </button>
      <FormTransaction onSubmit={handleNewTransaction}>
        <h2>Cadastrar transação</h2>

        <Input placeholder="Título" name="title" />
        <Input placeholder="valor" name="value" />

        <TransactionType>
          <TransactionTypeButton
            type="button"
            isActive={transactionType === "income"}
            onClick={() => setTransactionType("income")}
          >
            <img alt="Entrada" src={incomeImg} />
            <span>Entrada</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="button"
            isActive={transactionType === "outcome"}
            onClick={() => setTransactionType("outcome")}
          >
            <img alt="Saída" src={outcomeImg} />
            <span>Saída</span>
          </TransactionTypeButton>
        </TransactionType>

        <Input placeholder="Categoria" name="category" />

        <button type="submit">Cadastrar</button>
      </FormTransaction>
    </Modal>
  );
};

export default NewTransactionModal;
