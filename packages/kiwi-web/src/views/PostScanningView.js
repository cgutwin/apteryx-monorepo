import { BackButton, FormProgressBar } from "@kiwi/ui"
import * as PropTypes from "prop-types"
import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import MultipartFormContext from "../context/MultipartFormContext"
import ViewContext from "../context/ViewContext"
import AddExpiry from "../forms/AddExpiry"
import AddProductData from "../forms/AddProductData"
import { ViewContent } from "../templates/View"
import ExpiringView from "./ExpiringView"

// The multipart form switcher.
function PostScanningView({ productCode }) {
  // Default view you will always get is the create expiry form. If the product doesn't exist then it will append
  const [currentForm, setCurrentForm] = useState(0)
  const [fullFormData, setFullFormData] = useState({})
  // the add product form.
  const [formStack, setFormStack] = useState([
    {
      formId: "expiryData",
      title: "Create the Expiry",
      subscript: productCode,
      component: AddExpiry
    }
  ])
  const viewContext = useContext(ViewContext)

  // On mount, query the database, if the product exists. If it does, we just need to create new expiry information.
  // If not, we also need to add an entry for the product itself in the db.
  useEffect(() => {
    if (productCode !== "06580013009") {
      // Prepend the AddProductData form if the entry doesn't exist.
      setFormStack([
        {
          formId: "productData",
          title: "Add the Product Data",
          subscript: productCode,
          component: AddProductData
        },
        ...formStack
      ])
    }
  }, [])

  // Used to pass the form progress to the progress bar.
  const formProgress = (currentForm + 1) / formStack.length
  const Form = formStack[currentForm].component

  // We need a special handler for navigating back in these views, as if you are adding an expiry after a product,
  // you don't want to go back to the main expiry view.
  const backActionHandler = () => {
    if (currentForm > 0) {
      setCurrentForm(currentForm - 1)
    } else viewContext.setCurrentView(<ExpiringView />)
  }

  return (
    <>
      <Header>
        <HeaderTop>
          <BackButton
            onClick={backActionHandler}
            style={{
              background: "#E8EAED",
              borderRadius: "2rem",
              padding: "0.75rem"
            }}
          />
          <FormProgressBar progress={formProgress} />
        </HeaderTop>
        <div>
          <h2>{formStack[currentForm].title}</h2>
          <p>{formStack[currentForm].subscript}</p>
        </div>
      </Header>
      <ViewContent>
        {JSON.stringify(fullFormData)}
        <MultipartFormContext.Provider
          value={{
            formData: {
              data: fullFormData,
              update: function (dataPart) {
                setFullFormData({ ...this.data, ...dataPart })
              }
            },
            formControls: {
              current: {
                value: currentForm,
                id: formStack[currentForm].formId
              },
              next: function () {
                setCurrentForm(this.current.value + 1)
              },
              prev: function () {
                backActionHandler()
              },
              goTo: function (formNumber) {
                setCurrentForm(formNumber)
              }
            }
          }}
        >
          <Form productCode={productCode} />
        </MultipartFormContext.Provider>
      </ViewContent>
    </>
  )
}

// TODO: Refactor Header to @kiwi/ui
export const Header = styled.header`
  border-bottom: 2px solid #dcdfe5;
  color: #0d0d1b;
  display: flex;
  flex-direction: column;
  margin: 0 2rem 1rem 2rem;
  padding: 2rem 0;
`

// TODO: Make name better in context of content.
const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  // Hack "gap: 2rem" in because Safari doesnt support "@supports" or "gap" properly :roll_eyes:
  *:not(:first-child) {
    margin-left: 2rem;
  }
`

PostScanningView.propTypes = {
  productCode: PropTypes.string.isRequired
}

export default PostScanningView
