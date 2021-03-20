import React from "react";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.incomes += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.outcomes += transaction.value;
        acc.total -= transaction.value;
      }
      return acc;
    },
    {
      incomes: 0,
      outcomes: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img alt="Entradas" src={income} />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.incomes)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img alt="Saídas" src={outcome} />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.outcomes)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img alt="Total" src={total} />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
};

export default Summary;
