import React, { useContext, useEffect, useRef, useState } from "react"
import Scanner from "../components/Scanner"
import ViewContext from "../context/ViewContext"
import ExpiringView from "./ExpiringView"

function ScanningView() {
  const [results, setResults] = useState({})
  const [scanning, setScanning] = useState(true)
  const scannerRef = useRef(null)
  const viewContext = useContext(ViewContext)

  const onDetectedHandler = (result) => {
    setScanning(false)
    setResults(result)
  }

  useEffect(;() => {
    if (results.codeResult) {
      alert(results.codeResult.code)
      viewContext.setCurrentView(<ExpiringView />)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results])

  return (
    /* EXTRACT-STYLES */
    <div
      style={{
        maxHeight: "100vh",
        overflow: "hidden",
        display: "grid",
        gridTemplateRows: "4fr 1fr"
      }}
    >
      <div
        style={{
          gridRow: "1 / span 2",
          gridColumn: "1",
          height: window.outerHeight,
          width: window.innerWidth
        }}
        ref={scannerRef}
      >
        {scanning ? <Scanner scannerRef={scannerRef} onDetected={onDetectedHandler} /> : null}
      </div>
    </div>
  )
}

export default ScanningView
