"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

type DataPoint = {
  name: string;
  despesas: number;
  receitas: number;
};

type DataPointStyle = {
  nameStyle?: React.CSSProperties;
  despesasStyle?: React.CSSProperties;
  receitasStyle?: React.CSSProperties;
};

const data: DataPoint[] = [
  { name: "Jan", despesas: 4000, receitas: 1200 },
  { name: "Fev", despesas: 3000, receitas: 800 },
  { name: "Mar", despesas: 2000, receitas: 1500 },
  { name: "Abr", despesas: 2780, receitas: 1900 },
  { name: "Mai", despesas: 1890, receitas: 1200 },
  { name: "Jun", despesas: 2390, receitas: 1500 },
  { name: "Jul", despesas: 2390, receitas: 1500 },
  { name: "Ago", despesas: 2390, receitas: 7500 },
  { name: "Set", despesas: 2390, receitas: 11500 },
  { name: "Out", despesas: 2390, receitas: 3500 },
  { name: "Nov", despesas: 2390, receitas: 8500 },
  { name: "Dez", despesas: 2390, receitas: 1500 },
];

const styles: DataPointStyle = {
  nameStyle: { fontWeight: "bold", color: "blue" },
  despesasStyle: { color: "red" },
  receitasStyle: { color: "green", fontWeight: "bold" },
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 shadow-lg bg-white border border-gray-300 rounded-lg">
        <p style={styles.nameStyle}>{payload[0]?.payload?.name}</p>
        <p style={styles.despesasStyle}>
          Despesas: R$ {payload[0]?.value?.toLocaleString("pt-BR")}
        </p>
        {payload[1] && (
          <p style={styles.receitasStyle}>
            Receitas: R$ {payload[1]?.value?.toLocaleString("pt-BR")}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default function FinancialChart() {
  return (
    <div className="w-full p-4 shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white rounded-lg">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            stroke="#fff" // Branco para contraste em fundo escuro
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y}
                dy={10}
                textAnchor="middle"
                className="fill-black dark:fill-white font-semibold text-sm" // Melhor contraste e legibilidade
              >
                {payload.value}
              </text>
            )}
          />
          <YAxis
            stroke="#fff" 
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y}
                dy={4}
                textAnchor="end"
                className="fill-black dark:fill-white font-semibold text-sm"
              >
                {payload.value}
              </text>
            )}
          />

          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="despesas"
            stroke="#4CAF50"
            strokeWidth={2}
            dot={{ stroke: "#4CAF50", strokeWidth: 2, fill: "#4CAF50" }}
            activeDot={{ r: 8, fill: "#4CAF50" }}
          />
          <Line
            type="monotone"
            dataKey="receitas"
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
