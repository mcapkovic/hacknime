import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 169.925 21.98"
    // width={339.849}
    // height={43.959}
    {...props}
  >
    <defs>
      <style>
        {
          '@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}'
        }
      </style>
    </defs>
    <path
      d="M10.92 11.394c24.88.05 124.33.62 149.01.58M10 10.294c24.7-.32 124.6-.43 149.26-.06"
      stroke="#000"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)

export default SvgComponent
