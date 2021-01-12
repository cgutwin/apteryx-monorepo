import { ApolloProvider } from "@apollo/client"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import client from "./graphql/client"
import typography from "./typography"

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

typography.injectStyles()
