import { useQuery } from "@apollo/client"
import React, { Suspense, useContext, useState } from "react"
import Header from "../../components/Header"
import LinearCalendar from "../../components/LinearCalendar"
import SkeletonCards from "../../components/loaders/skeleton/SkeletonCards"
import SegmentedControls from "../../components/SegmentedControls"
import DateContext from "../../context/DateContext"
import ViewContext from "../../context/ViewContext"
import { QUERY_ALL_EXPIRING_ON } from "../../graphql/queries"
import { FlexChildRemaining, FlexParentColumn } from "../../templates/FlexParent"
import { ViewContent } from "../../templates/View"
import datestampToMs from "../../utils/datestampToMs"

// Lazy imports
const ExpiringListView = React.lazy(() => import("./ExpiringList"))
const PulledListView = React.lazy(() => import("./PulledList"))
const ScanningView = React.lazy(() => import("../ScanningView"))

// The segments that are displayed by the SegmentedControls
const segments = [
  {
    name: "Expiring"
  },
  {
    name: "Pulled"
  }
]

// The main view to display expiring and pulled products. Contains a calendar at the top, along with a button to
// open the scanner. Displays a selector for either pulled or expiring products, and displays the corresponding view
// to display them.
function ExpiringView() {
  const viewContext = useContext(ViewContext)
  // Determines which segment of the SegmentedControls is active.
  const [selectedSegment, setSelectedSegment] = useState(0)
  // Which date is active in the calendar. By default, today is the active date.
  const [activeDate, setActiveDate] = useState(new Date(Date.now()))
  // Converts a date+time item into a datestamp (just the date, no time)
  const dateInMs = datestampToMs(activeDate.toString())
  // Query for products expiring on datestamp in ms.
  const { loading, error, data, refetch } = useQuery(QUERY_ALL_EXPIRING_ON, {
    variables: {
      date: dateInMs,
      when: "ON"
    }
  })

  const segmentChangeHandler = (segment) => setSelectedSegment(segment)

  // If loading, then display a skeleton loader, else display based on selectedSegment.
  const CardsDisplay = loading ? (
    <SkeletonCards numberToRender={4} />
  ) : selectedSegment === 0 ? (
    /*
     When the data is loaded, display either an expiring or pulled list based on what value the selectedSegmenthas
     taken.
     */
    <ExpiringListView products={data.expiringOn} refetch={refetch} />
  ) : (
    <PulledListView products={data.expiringOn} refetch={refetch} />
  )

  if (error) return <code>{JSON.stringify(error.message)}</code>
  return (
    <DateContext.Provider
      value={{
        activeDate,
        setActiveDate
      }}
    >
      {/* Flex on 'em to let the ViewContent take the remaining space. */}
      <FlexParentColumn>
        <Header
          title={"Expiring"}
          onButtonClick={() =>
            viewContext.setCurrentView(
              <Suspense fallback={<div>Starting scanner...</div>}>
                <ScanningView />
              </Suspense>
            )
          }
        >
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
          <SegmentedControls segments={segments} onSegmentChange={segmentChangeHandler} selected={selectedSegment} />
          <FlexChildRemaining
            style={{
              padding: "0.5rem 0"
            }}
          >
            <Suspense fallback={<SkeletonCards numberToRender={4} />}>{CardsDisplay}</Suspense>
          </FlexChildRemaining>
        </ViewContent>
      </FlexParentColumn>
    </DateContext.Provider>
  )
}

export default ExpiringView
