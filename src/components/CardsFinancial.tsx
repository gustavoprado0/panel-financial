"use client";

type FinancialCardProps = {
  title: string;
  value: number;
  isIncome: boolean;
};

const FinancialCard = ({ title, value, isIncome }: FinancialCardProps) => (
  <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white">
    <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
    <p
      className={`text-2xl font-normal ${
        isIncome ? "text-green-500" : "text-red-500"
      }`}
    >
      {isIncome ? "+" : "-"} R${value.toFixed(2)}
    </p>
  </div>
);

export default function FinancialCards() {
  const totalIncome = 15000; 
  const totalExpense = 8000; 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <FinancialCard title="Receitas" value={totalIncome} isIncome={true} />
      <FinancialCard title="Despesas" value={totalExpense} isIncome={false} />
      <FinancialCard
        title="Saldo"
        value={totalIncome - totalExpense}
        isIncome={totalIncome - totalExpense > 0}
      />
    </div>
  );
}
