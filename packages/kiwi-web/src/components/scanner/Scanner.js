import PropTypes from "prop-types"
import React, { useRef, useState } from "react"
import styled from "styled-components"
import useScanner from "../../hooks/useScanner"

export default function Scanner({ onResults }) {
  const [isScanning, setIsScanning] = useState(true)
  const scannerRef = useRef(null)

  const onDetectedHandler = (results) => {
    setIsScanning((prevState) => !prevState)
    onResults(results)
  }

  // Injects the scanner into the ref.
  useScanner(onDetectedHandler, scannerRef)

  return isScanning && <ScannerWrapper ref={scannerRef} />
}

Scanner.propTypes = {
  onResults: PropTypes.func.isRequired
}

const ScannerWrapper = styled.div`
  max-height: 100vh;
  overflow: hidden;
`
