import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";
import ReactModal from "react-modal";
import { TransactionsProvider } from "./hooks/useTransactions";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Feelancer de website",
          type: "income",
          category: "Dev",
          value: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "outcome",
          category: "Casa",
          value: 1100,
          createdAt: new Date("2021-02-14 11:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", { ...data, createdAt: new Date() });
    });
  },
});

ReactModal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <GlobalStyle />
      <App />
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
