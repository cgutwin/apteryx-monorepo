// eslint-disable-next-line no-unused-vars
import { QuaggaJSResultObject } from "@ericblade/quagga2"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Scanner from "../components/scanner/Scanner"

export default function Scan({ navigate }) {
  /**
   * @function handleResults
   * Handles the results passed from the scanner, when it picks up a code. This should be passed into the Scanner
   * component.
   *
   * @param {QuaggaJSResultObject} results
   * */
  const handleResults = async (results) => {
    if (results.codeResult.code)
      await navigate(
        `${process.env.PUBLIC_PATH.slice(0, -1)}/expiring/new/${
          results.codeResult.code
        }`
      )
    else alert("error, no result code available.")
  }

  return (
    <ScanWrapper>
      <ScannerView>
        <Scanner onResults={handleResults} />
      </ScannerView>
    </ScanWrapper>
  )
}

Scan.propTypes = {
  navigate: PropTypes.func.isRequired
}

const ScanWrapper = styled.main`
  display: grid;
  grid-template-rows: 4fr 1fr;
  grid-template-columns: 1fr;
  max-height: 100vh;
  overflow: hidden;
`

const ScannerView = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1;
`
