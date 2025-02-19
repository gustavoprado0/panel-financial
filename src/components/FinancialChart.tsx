"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type DataPoint = {
  name: string;
  income: number;
  expense: number;
};

const data: DataPoint[] = [
  { name: "Jan", income: 4000, expense: 1200 },
  { name: "Fev", income: 3000, expense: 800 },
  { name: "Mar", income: 2000, expense: 1500 },
  { name: "Abr", income: 2780, expense: 1900 },
  { name: "Mai", income: 1890, expense: 1200 },
  { name: "Jun", income: 2390, expense: 1500 },
  { name: "Jul", income: 2390, expense: 1500 },
  { name: "Ago", income: 2390, expense: 7500 },
  { name: "Set", income: 2390, expense: 11500 },
  { name: "Out", income: 2390, expense: 3500 },
  { name: "Nov", income: 2390, expense: 8500 },
  { name: "Dez", income: 2390, expense: 1500 },
];

export default function FinancialChart() {
  return (
    <div className="w-full p-4 shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white rounded-lg">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#ddd"
            className="dark:stroke-gray-600"
          />
          <XAxis
            dataKey="name"
            stroke="#333"
            className="dark:stroke-gray-300"
          />
          <YAxis stroke="#333" className="dark:stroke-gray-300" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#4CAF50"  
            strokeWidth={2}
            dot={{ stroke: "#4CAF50", strokeWidth: 2, fill: "#4CAF50" }}
            activeDot={{ r: 8, fill: "#4CAF50" }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#FF5722"  
            strokeWidth={2}
            dot={{ stroke: "#FF5722", strokeWidth: 2, fill: "#FF5722" }}
            activeDot={{ r: 8, fill: "#FF5722" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
