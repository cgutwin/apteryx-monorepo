import { BackButton, FormProgressBar } from "@kiwi/ui"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import ViewContext from "../context/ViewContext"
import AddExpiryForm from "../forms/AddExpiryForm"
import AddProductForm from "../forms/AddProductForm"
import { ViewContent } from "../templates/View"
import ExpiringView from "./ExpiringView"
import MultipartFormController from "../components/MultipartFormController"

function PostScanningView() {
  const viewContext = useContext(ViewContext)
  const [currentFormMeta, setCurrentFormMeta] = useState({
    currentForm: null,
    title: "UNSET_FORM_TITLE",
    subscript: "UNSET_FORM_SUBSCRIPT"
  })

  // todo: query product by upc, if exists, remove AddProductForm from the stack below.

  const onFormChange = (data) => {
    setCurrentFormMeta({ ...currentFormMeta, ...data })
  }

  return (
    <>
      <Header>
        <HeaderTop>
          <BackButton
            onClick={() => viewContext.setCurrentView(<ExpiringView />)}
            style={{
              background: "#E8EAED",
              borderRadius: "2rem",
              padding: "0.75rem"
            }}
          />
          <FormProgressBar progress={currentFormMeta.currentForm / 2} />
        </HeaderTop>
        <div>
          <h2>{currentFormMeta.title}</h2>
          <p>{currentFormMeta.subscript}</p>
        </div>
      </Header>
      <ViewContent>
        <MultipartFormController
          onFormChange={onFormChange}
          forms={[<AddProductForm key={0} upc="1" />, <AddExpiryForm key={1} />]}
        />
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
  margin: 0 2rem 2rem 2rem;
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

export default PostScanningView
