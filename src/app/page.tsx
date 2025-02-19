"use client";

import FinancialCards from "@/components/CardsFinancial";
import FinancialChart from "@/components/FinancialChart";
import TransactionList from "@/components/TransactionList";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {

  return (
    <div className="w-full max-w-full space-y-5 container mx-auto p-8 dark:text-w">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Painel Financeiro</h1>
        <ThemeToggle />
      </header>

      <FinancialCards />
      <FinancialChart />

      <div className="mt-8">
        {/* <TransactionForm onTransactionAdded={addTransaction} /> */}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Transações Recentes</h2>
        <TransactionList />
      </div>
    </div>
  );
}
