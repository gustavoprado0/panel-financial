"use client";

import { useState } from "react";
import axios from "axios";

type Transaction = {
  id: number;
  description: string;
  amount: number;
  type: TransactionType;
};

type TransactionType = "income" | "expense";

export default function TransactionForm({ onTransactionAdded }: { onTransactionAdded: (newTransaction: Transaction) => void }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<TransactionType>("income");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction: Transaction = {
      id: Date.now(), 
      description,
      amount,
      type,
    };

    // Envia a nova transação para o servidor
    axios.post('/api/transactions', newTransaction)
      .then(() => {
        // Atualiza a lista de transações no componente pai
        onTransactionAdded(newTransaction);
      })
      .catch((error) => {
        console.error("Erro ao adicionar transação:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white  shadow-xl dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
    >
      <div>
        <label className="block text-sm text-black dark:text-white">Descrição</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded text-black dark:text-white dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-black dark:text-white">Valor</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded text-black dark:text-white dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-black dark:text-white">Tipo</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as TransactionType)}
          className="w-full p-2 border rounded text-black dark:text-white dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="income">Receita</option>
          <option value="expense">Despesa</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-zinc-500 dark:bg-gray-700 hover:bg-zinc-400 text-white p-2 rounded dark:hover:bg-gray-600"
      >
        Adicionar Transação
      </button>
    </form>
  );
}
