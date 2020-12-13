import { Header, SegmentedControls } from "@kiwi/ui"
import React, { useContext, useState } from "react"
import ViewContext from "../context/ViewContext"
import { ViewContent } from "../templates/View"
import ScanningView from "./ScanningView"

function ExpiringView() {
  const viewContext = useContext(ViewContext)
  const [selectedSegment, setSelectedSegment] = useState(0)
  const segmentChangeHandler = (segment) => setSelectedSegment(segment)

  return (
    <div>
      <Header title={"Expiring"} onButtonClick={() => viewContext.setCurrentView(<ScanningView />)} />
      <ViewContent>
        <SegmentedControls
          segments={[
            {
              name: "Products Expiring"
            },
            {
              name: "Pulled"
            }
          ]}
          onSegmentChange={segmentChangeHandler}
          selected={selectedSegment}
        />
        {selectedSegment === 0 ? "Products Expiring" : selectedSegment === 1 ? "Pulled" : null}
      </ViewContent>
    </div>
  )
}

export default ExpiringView
