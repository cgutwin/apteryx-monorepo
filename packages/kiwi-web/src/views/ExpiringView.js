import { useQuery } from "@apollo/client"
import { Header, SegmentedControls } from "@kiwi/ui"
import React, { createContext, useContext, useState } from "react"
import LinearCalendar from "../components/LinearCalendar"
import ViewContext from "../context/ViewContext"
import ALL_EXPIRING_ON from "../graphql/queries/allExpiringOn"
import { ViewContent } from "../templates/View"
import ScanningView from "./ScanningView"

const DateContext = createContext(null)

// todo refactor out, add in an argument that sets whether or not the item is marked as pulled for the query.
// eslint-disable-next-line react/prop-types
function ExpiringItemsView({ date, pulled }) {
  const dateString = new Date(date).toString().split(" ").splice(1, 3).join(" ")
  const dateMs = Date.parse(dateString)

  const { loading, error, data } = useQuery(ALL_EXPIRING_ON, {
    variables: {
      date: dateMs,
      when: "ON"
    }
  })

  if (loading) return <h2>Loading...</h2>
  if (error)
    return (
      <div>
        error fetching data: <code>{error}</code>
      </div>
    )
  if (data.expiringOn.length <= 0) return <div>Nothing expiring on {dateString}</div>

  return data.expiringOn.map((expiry, i) =>
    pulled === expiry.isPulled ? (
      <div key={i}>
        <h4>{expiry.product[0].name}</h4>
        <p>{expiry.upc}</p>
      </div>
    ) : null
  )
}

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
              name: "Expiring"
            },
            {
              name: "Pulled"
            }
          ]}
          onSegmentChange={segmentChangeHandler}
          selected={selectedSegment}
        />
        {selectedSegment === 0 ? (
          <ExpiringItemsView date={activeDate} pulled={false} />
        ) : (
          <ExpiringItemsView date={activeDate} pulled={true} />
        )}
      </ViewContent>
    </DateContext.Provider>
  )
}

export default ExpiringView
