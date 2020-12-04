import Quagga from "@ericblade/quagga2"
import PropTypes from "prop-types"
// eslint-disable-next-line
import React, { useEffect } from "react"

export default function Scanner({ onDetected, scannerRef }) {
  useEffect(() => {
    const config = {
      inputStream: {
        constraints: {
          // For some reason, the width and height fields affect their counterparts, so the below fixes that.
          width: window.outerHeight,
          height: window.innerWidth,
          facingMode: "environment"
        },
        name: "Live",
        target: scannerRef.current,
        type: "LiveStream"
      },
      locator: {
        halfSample: false,
        patchSize: "medium"
      },
      locate: true,
      // Num of workers isn't currently supported.
      numOfWorkers: 0,
      frequency: 1,
      decoder: {
        readers: ["upc_reader"],
        multiple: false
      }
    }

    Quagga.init({ ...config }, (err) => {
      if (err) console.error(err)
      Quagga.start()
    })

    Quagga.onDetected(onDetected)

    return () => {
      Quagga.offDetected()
      Quagga.stop()
    }
  }, [scannerRef, onDetected])

  return null
}

Scanner.propTypes = {
  onDetected: PropTypes.func.isRequired,
  scannerRef: PropTypes.object.isRequired
}
