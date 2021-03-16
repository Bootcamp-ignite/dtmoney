import React, { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

const TransactionTable: React.FC = () => {

  useEffect(() => {
    api.get("transactions").then(response => console.log(response.data));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Desenvolvimento de site</td>
                <td className="income">R$ 12.000</td>
                <td>Venda</td>
                <td>13/04/2021</td>
            </tr>
            <tr>
                <td>Hamburguer</td>
                <td className="outcome">R$ 59,00</td>
                <td>Alimentação</td>
                <td>14/04/2021</td>
            </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;
