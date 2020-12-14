import { Header, SegmentedControls } from "@kiwi/ui"
import LinearCalendar from "../components/LinearCalendar"
import React, { createContext, useContext, useState } from "react"
import ViewContext from "../context/ViewContext"
import { ViewContent } from "../templates/View"
import ScanningView from "./ScanningView"

const DateContext = createContext(null)

function ExpiringView() {
  const viewContext = useContext(ViewContext)
  const [selectedSegment, setSelectedSegment] = useState(0)
  const [activeDate, setActiveDate] = useState(new Date(Date.now()))

  const segmentChangeHandler = (segment) => setSelectedSegment(segment)

  return (
    <DateContext.Provider
      value={{
        activeDate,
        setActiveDate
      }}
    >
      <Header title={"Expiring"} onButtonClick={() => viewContext.setCurrentView(<ScanningView />)}>
        <LinearCalendar
          selectedDate={{
            value: activeDate,
            set: (date) => setActiveDate(date)
          }}
          startDate={-1}
          style={{
            marginTop: "2rem"
          }}
        />
      </Header>
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
    </DateContext.Provider>
  )
}

export default ExpiringView
