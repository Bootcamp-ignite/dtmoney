import { createContext, useContext, useEffect, useState } from "react";

import React from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  value: number;
  createdAt: string;
}

export type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function getTransactions() {
    const response = await api.get("transactions");
    const transactions = response.data.transactions;
    setTransactions(transactions);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  async function createTransaction(
    transaction: TransactionInput
  ): Promise<void> {
    await api.post("/transactions", transaction);
    getTransactions();
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
