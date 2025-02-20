import { NextResponse } from "next/server";

const transactions = [
  { id: 1, description: "Salário", amount: 5000, type: "dispesas" },
  { id: 2, description: "Aluguel", amount: -1200, type: "receitas" },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  let filteredData = transactions;
  if (id) {
    filteredData = transactions.filter((item) => item.id <= Number(id));
  }

  return NextResponse.json(filteredData);
}

export async function POST(req: Request) {
  const newTransaction = await req.json();
  transactions.push(newTransaction);

  return NextResponse.json(newTransaction, { status: 201 });
}
