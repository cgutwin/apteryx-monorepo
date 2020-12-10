import * as PropTypes from "prop-types"
import React, { useContext, useEffect, useState } from "react"
import ViewContext from "../context/ViewContext"
import CreateExpiryView from "./CreateExpiryView"
import CreateProductView from "./CreateProductView"
import ExpiringView from "./ExpiringView"

function PostScanningView({ productCode }) {
  const [formStack, setFormStack] = useState([
    {
      name: "createExpiryView",
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
          name: "createProductView",
          component: <CreateProductView productCode={productCode} onCreateProduct={createProductHandler} />
        },
        ...formStack
      ])
    }
  }, [])

  return (
    <>
      <header>
        <button onClick={backActionHandler}>back</button>
      </header>
      <div>{formStack[currentForm].component}</div>
    </>
  )
}

PostScanningView.propTypes = {
  productCode: PropTypes.string.isRequired
}

export default PostScanningView
