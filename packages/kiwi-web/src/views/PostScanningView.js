import { BackButton } from "@kiwi/ui"
import * as PropTypes from "prop-types"
import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import ViewContext from "../context/ViewContext"
import { ViewContent } from "../templates/View"
import CreateExpiryView from "./CreateExpiryView"
import CreateProductView from "./CreateProductView"
import ExpiringView from "./ExpiringView"

function PostScanningView({ productCode }) {
  const [formStack, setFormStack] = useState([
    {
      id: "createExpiryView",
      title: productCode,
      component: <CreateExpiryView productCode={productCode} />
    }
  ])
  const [currentForm, setCurrentForm] = useState(0)
  const viewContext = useContext(ViewContext)

  const createProductHandler = () => setCurrentForm(currentForm + 1)

  // We need a special handler for navigating back in these views, as if you are adding an expiry after a product,
  // you don't want to go back to the main expiry view.
  const backActionHandler = () => {
    if (currentForm > 0) {
      setCurrentForm(currentForm - 1)
    } else viewContext.setCurrentView(<ExpiringView />)
  }

  // On mount, query the database, if the product exists. If it does, we just need to create new expiry information.
  // If not, we also need to add an entry for the product itself in the db.
  useEffect(() => {
    if (productCode !== "072067397010") {
      setFormStack([
        {
          id: "createProductView",
          title: "Create Product",
          component: <CreateProductView productCode={productCode} onCreateProduct={createProductHandler} />
        },
        ...formStack
      ])
    }
  }, [])

  return (
    <>
      <Header>
        <BackButton onClick={backActionHandler} />
        <div
          style={{
            textAlign: "center"
          }}
        >
          <h2>{formStack[currentForm].title}</h2>
        </div>
      </Header>
      <ViewContent>{formStack[currentForm].component}</ViewContent>
    </>
  )
}

export const Header = styled.header`
  padding: 0.5rem 1rem;
  background-color: #f7f8fd;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
`

PostScanningView.propTypes = {
  productCode: PropTypes.string.isRequired
}

export default PostScanningView
