import { useQuery } from "@apollo/client"
import React, { useContext, useEffect, useState } from "react"
import ActionHeader from "../../components/headers/ActionHeader"
import LinearCalendar from "../../components/LinearCalendar"
import PadContent from "../../components/PadContent"
import SegmentedControls from "../../components/SegmentedControls"
import DateProvider from "../../context/DateContext"
import { QUERY_ALL_EXPIRING_ON } from "../../graphql/queries"
import { DAY_IN_MS } from "../../utils/constants"
import getDateWithoutTime from "../../utils/getDateWithoutTime"
import ExpiringListView from "../../views/ExpiringListView"
import PulledListView from "../../views/PulledListView"

// The segments that are displayed by the SegmentedControls
const segments = [
  {
    name: "Expiring"
  },
  {
    name: "Pulled"
  }
]

export default function Expiring({ changeTheme, navigate }) {
  const { selectedDate, setSelectedDate } = useContext(DateProvider)
  const dateInMs = getDateWithoutTime(selectedDate)
  // Determines which segment of the SegmentedControls is active.
  const [selectedSegment, setSelectedSegment] = useState(0)
  const { loading, error, data, refetch } = useQuery(QUERY_ALL_EXPIRING_ON, {
    variables: {
      // + will convert the date into unix time in ms.
      date: +dateInMs,
      when: "ON"
    }
  })

  /**
   * @function ExpiringQueryDisplay
   * Queried data is passed to the correct views, which only display their corresponding pulled/not
   * pulled data.
   * */
  const ExpiringQueryDisplay = () => {
    if (loading) return <p>loading...</p>
    if (error) return <code>{error.message}</code>

    // In this case, 0 is expiring, and 1 is pulled (see Segments constant defined above component).
    switch (selectedSegment) {
      case 0:
        return <ExpiringListView products={data.expiringOn} refetch={refetch} />
      case 1:
        return <PulledListView products={data.expiringOn} refetch={refetch} />
    }
  }

  // Refetch the products that are expiring on a date every time the page is loaded.
  useEffect(() => {
    refetch()
  }, [])

  return (
    <>
      <ActionHeader
        title="Expiring"
        changeTheme={changeTheme}
        navigate={navigate}
      >
        <LinearCalendar
          datesToDisplay={7}
          onChangeSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
          // The start date is yesterday, getDateWithoutTime turned to Unix ms, subtract one day.
          startDate={new Date(getDateWithoutTime().getTime() - DAY_IN_MS)}
          style={{
            marginTop: "2rem"
          }}
        />
      </ActionHeader>
      <PadContent>
        <SegmentedControls
          segments={segments}
          onSegmentChange={setSelectedSegment}
          selected={selectedSegment}
        />
        <div>
          <ExpiringQueryDisplay />
        </div>
      </PadContent>
    </>
  )
}
