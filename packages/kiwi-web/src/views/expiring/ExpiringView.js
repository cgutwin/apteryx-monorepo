import { useQuery } from "@apollo/client"
import React, { createContext, Suspense, useContext, useState } from "react"
import Header from "../../components/Header"
import LinearCalendar from "../../components/LinearCalendar"
import SkeletonCards from "../../components/loaders/skeleton/SkeletonCards"
import SegmentedControls from "../../components/SegmentedControls"
import ViewContext from "../../context/ViewContext"
import { QUERY_ALL_EXPIRING_ON } from "../../graphql/queries"
import { ViewContent } from "../../templates/View"
import datestampToMs from "../../utils/datestampToMs"

// Lazy imports
const ExpiringListView = React.lazy(() => import("./ExpiringList"))
const PulledListView = React.lazy(() => import("./PulledList"))
const ScanningView = React.lazy(() => import("../ScanningView"))

const DateContext = createContext(null)

function ExpiringView() {
  const viewContext = useContext(ViewContext)
  const [selectedSegment, setSelectedSegment] = useState(0)
  const [activeDate, setActiveDate] = useState(new Date(Date.now()))
  const dateInMs = datestampToMs(activeDate)
  // Query for products expiring on datestamp in ms.
  const { loading, error, data, refetch } = useQuery(QUERY_ALL_EXPIRING_ON, {
    variables: {
      date: dateInMs,
      when: "ON"
    }
  })
  const segmentChangeHandler = (segment) => setSelectedSegment(segment)

  if (loading) return <SkeletonCards numberToRender={4} />
  if (error) return <code>{JSON.stringify(error.message)}</code>
  return (
    <DateContext.Provider
      value={{
        activeDate,
        setActiveDate
      }}
    >
      {/* Flex on 'em to let the ViewContent take the remaining space. */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "inherit"
        }}
      >
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
          <SegmentedControls
            segments={[
              {
                name: "Expiring"
              },
              {
                name: "Pulled"
              }
            ]}
            onSegmentChange={segmentChangeHandler}
            selected={selectedSegment}
          />
          <section
            style={{
              padding: "0.5rem 0",
              flex: 1
            }}
          >
            <Suspense fallback={<SkeletonCards numberToRender={4} />}>
              {selectedSegment === 0 ? (
                <ExpiringListView products={data.expiringOn} refetch={refetch} />
              ) : (
                <PulledListView products={data.expiringOn} refetch={refetch} />
              )}
            </Suspense>
          </section>
        </ViewContent>
      </div>
    </DateContext.Provider>
  )
}

export default ExpiringView
