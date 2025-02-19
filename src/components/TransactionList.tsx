"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import TransactionForm from "./TransactionForm";

type Transaction = {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense";
};

export default function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    axios
      .get("/api/transactions")
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, []);

  // Função que adiciona a transação à lista
  const addTransaction = (newTransaction: Transaction) => {
    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);
  };

  return (
    <div>
      <TransactionForm onTransactionAdded={addTransaction} />

      <div className="w-full max-w-full space-y-4 mt-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between p-4 border rounded-lg shadow-xl bg-white dark:bg-gray-800 dark:border-gray-600"
          >
            <span className="dark:text-white">{transaction.description}</span>
            <span
              className={
                transaction.type === "income"
                  ? "text-green-500 dark:text-green-400"
                  : "text-red-500 dark:text-red-400"
              }
            >
              {transaction.type === "income" ? "+" : "-"} R${transaction.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
