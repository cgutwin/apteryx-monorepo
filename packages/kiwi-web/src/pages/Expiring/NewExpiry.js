import { useMutation, useQuery } from "@apollo/client"
import { useParams } from "@reach/router"
import React, { Suspense, useEffect, useState } from "react"
import BackButton from "../../components/buttons/BackButton"
import UnderTitleHeader from "../../components/headers/UnderTitleHeader"
import PadContent from "../../components/PadContent"
import FormProgressBar from "../../components/ProgressBar"
import CREATE_EXPIRY from "../../graphql/mutations/createExpiry"
import CREATE_PRODUCT from "../../graphql/mutations/createProduct"
import { QUERY_PRODUCT } from "../../graphql/queries"
import useMultipartForm from "../../hooks/useMultipartForm"

// Lazy Imports
const NewExpiryForm = React.lazy(() => import("../../forms/NewExpiryForm"))
const NewProductForm = React.lazy(() => import("../../forms/NewProductForm"))

/**
 * NewExpiry, when rendered by the router, accepts a UPC parameter.
 * */
export default function NewExpiry({ navigate }) {
  const { upc } = useParams()
  // If there is an existing product when queried, this is it.
  const [existingProduct, setExistingProduct] = useState({})
  // By setting a will submit, we conditionally submit on formData updates, so we can access the latest state.
  const [willSubmit, setWillSubmit] = useState(false)
  /*
   The initial state includes the New Expiry form, as that's what our end goal is, we will always be creating a
   new expiry through this page.
   */
  const [forms, setForms] = useState([
    {
      element: NewExpiryForm,
      title: "New Expiry",
      subtitle: upc
    }
  ])
  const {
    form,
    progress,
    currentForm,
    prevForm,
    formData
  } = useMultipartForm(forms, () => setWillSubmit(true))
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [createExpiry] = useMutation(CREATE_EXPIRY)
  // Query the database to see if the product with the associated UPC already exists.
  const { loading } = useQuery(QUERY_PRODUCT, {
    variables: {
      upc
    },
    onCompleted: (data) => {
      /*
       If the product doesn't exist in the products database, we want to prepend a AddProductDataForm to the
       multiform stack.
       */
      if (!data.product.length) {
        setForms((prevState) => [
          {
            element: NewProductForm,
            title: "New Product",
            subtitle: upc
          },
          ...prevState
        ])
        // Otherwise we just update the existingProduct state with the existing product data.
      } else setExistingProduct(data.product[0])
    }
  })

  const submitProductData = async () => {
    if (formData.product)
      return createProduct({
        variables: {
          product: formData.product
        }
      })
  }

  const submitExpiryData = async () => {
    if (formData.expiry) {
      const dateInUnix = formData.expiry.expiring.split("-")
      const expiryDate = new Date(
        dateInUnix[0],
        dateInUnix[1] - 1,
        dateInUnix[2]
      )
      return createExpiry({
        variables: {
          expiry: {
            expiring: Date.parse(expiryDate.toString()),
            upc: existingProduct.upc || formData.product.upc
          }
        }
      })
    }
  }

  /**
   * @function submitForm
   * Performs the final submit action on the form data.
   *
   * Don't call submitForm directly. Call triggerSubmit instead to update the state properly, and submit the most
   * current information.
   *
   * @returns void
   * */
  const submitForm = () => {
    setWillSubmit(false)
    Promise.all([submitProductData(), submitExpiryData()])
      .then(() => {
        alert("product created")
        navigate(`${process.env.PUBLIC_PATH.slice(0, -1)}/expiring`)
      })
      .catch((err) => alert(`error: ${JSON.stringify(err)}`))
  }

  /**
   * @function Form
   * Renders the current multipart form.
   *
   * @param props - Props to pass to the component.
   * */
  const Form = (props) => form.render({ ...props })

  /**
   * @function backActionHandler
   * A special handler to manage the top level back button wrapping the forms. If the current form is the first one,
   * we just want to go back to a specific page. If it's progressed in the forms, we want to go back to the previous
   * one.
   * */
  const backActionHandler = async () => {
    if (currentForm === 0)
      await navigate(`${process.env.PUBLIC_PATH.slice(0, -1)}/expiring`)
    else prevForm()
  }

  useEffect(() => {
    if (willSubmit) submitForm()
  }, [formData, willSubmit])

  return (
    !loading && (
      <>
        <UnderTitleHeader
          action={<BackButton onClick={backActionHandler} />}
          title={form.title}
          subtitle={form?.subtitle}
        >
          {/* Only display the progress bar if there is more than one form to show. */}
          {forms.length > 1 && <FormProgressBar progress={progress} />}
        </UnderTitleHeader>
        <PadContent>
          <Suspense fallback={<div>loading</div>}>
            <Form code={upc} />
          </Suspense>
        </PadContent>
      </>
    )
  )
}
