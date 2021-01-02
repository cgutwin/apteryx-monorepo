import { useMutation, useQuery } from "@apollo/client"
import { BackButton, FormProgressBar } from "@kiwi/ui"
import * as PropTypes from "prop-types"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import MultipartFormController from "../components/MultipartFormController"
import ViewContext from "../context/ViewContext"
import AddExpiryDataForm from "../forms/AddExpiryDataForm"
import AddProductDataForm from "../forms/AddProductDataForm"
import CREATE_EXPIRY from "../graphql/mutations/createExpiry"
import CREATE_PRODUCT from "../graphql/mutations/createProduct"
import QUERY_PRODUCT from "../graphql/queries/queryProduct"
import { ViewContent } from "../templates/View"
import ExpiringView from "./ExpiringView"

function PostScanningView({ code }) {
  const viewContext = useContext(ViewContext)
  const [queriedProduct, setQueriedProduct] = useState({})
  const [multiformMeta, setMultiformMeta] = useState({})
  // Contains all the forms that will be rendered by the MultiformController.
  const [multiformStack, setMultiformStack] = useState([
    {
      element: <AddExpiryDataForm key={"addExpiryDataForm"} />,
      title: "Add Expiry Info"
    }
  ])
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [createExpiry] = useMutation(CREATE_EXPIRY)

  const { loading } = useQuery(QUERY_PRODUCT, {
    variables: {
      upc: code
    },
    onCompleted: (data) => {
      // If the product doesn't exist in the products database, we want to prepend a AddProductDataForm to the
      // multiform stack.
      if (!data.product.length) {
        setMultiformStack([
          {
            element: <AddProductDataForm key={"addProductDataForm"} code={code} />,
            title: "Create Product Entry"
          },
          ...multiformStack
        ])
      } else setQueriedProduct(data.product[0])
    }
  })

  if (loading) return <h2>loading</h2>
  return (
    <>
      <Header>
        <HeaderControls>
          <BackButton
            onClick={() => {
              if (multiformMeta.currentForm === 0) viewContext.setCurrentView(<ExpiringView />)
              else multiformMeta.nav.prev()
            }}
            style={{
              background: "#E8EAED",
              borderRadius: "2rem",
              padding: "0.75rem"
            }}
          >
            Back
          </BackButton>
          <FormProgressBar progress={(multiformMeta.currentForm + 1) / multiformStack.length} />
        </HeaderControls>
        <h2>{multiformStack[multiformMeta.currentForm]?.title}</h2>
      </Header>
      <ViewContent>
        <MultipartFormController
          forms={multiformStack}
          onFormChange={(props) => setMultiformMeta((prevState) => ({ ...prevState, ...props }))}
          onSubmit={(data) => {
            if (data.product)
              createProduct({
                variables: {
                  product: data.product
                }
              })
            if (data.expiry) {
              const dateInUnix = data.expiry.expiring.split("-")
              const expiryDate = new Date(dateInUnix[0], dateInUnix[1] - 1, dateInUnix[2])
              createExpiry({
                variables: {
                  expiry: {
                    expiring: Date.parse(expiryDate.toString()),
                    upc: queriedProduct.upc || data.product.upc
                  }
                }
              })
            }
            viewContext.setCurrentView(<ExpiringView />)
          }}
        />
      </ViewContent>
    </>
  )
}

PostScanningView.propTypes = {
  code: PropTypes.string
}

const Header = styled.header`
  border-bottom: 2px solid #dcdfe5;
  color: #0d0d1b;
  display: flex;
  flex-direction: column;
  margin: 0 2rem 1rem 2rem;
  padding: 2rem 0;
`

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  // Hack "gap: 2rem" in because Safari doesnt support "@supports" or "gap" properly :roll_eyes:
  *:not(:first-child) {
    margin-left: 2rem;
  }
`

export default PostScanningView
