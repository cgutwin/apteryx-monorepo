import { ApolloProvider } from "@apollo/client"
import "normalize.css"
import React from "react"
import { render } from "react-dom"
import App from "./App"
import client from "./graphql"
import "./styles/global.css"
import typography from "./styles/typography"

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

typography.injectStyles()
