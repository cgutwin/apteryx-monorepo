import { Header } from "@kiwi/ui"
import React, { useContext } from "react"
import ViewContext from "../context/ViewContext"
import { ViewContent } from "../templates/View"
import ScanningView from "./ScanningView"

function ExpiringView() {
  const viewContext = useContext(ViewContext)

  return (
    <div>
      <Header title={"test"} onButtonClick={() => viewContext.setCurrentView(<ScanningView />)} />
      <ViewContent>test</ViewContent>
    </div>
  )
}

export default ExpiringView
