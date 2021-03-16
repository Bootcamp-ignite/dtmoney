import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { createServer } from 'miragejs';

createServer({
  namespace: 'api',
  routes() {
    this.get("/transactions", () => {
      return [{
        id: 1,
        type: "income",
        title: "Desenvolvimento de site",
        price: 120000,
        category: 'vendas',
        createdAt: new Date()
      }]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
