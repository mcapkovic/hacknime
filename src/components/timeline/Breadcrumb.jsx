import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 821.059 45"
    // width={1642.119}
    // height={90}
    {...props}
  >
    <defs>
      <style>
        {
          '@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}'
        }
      </style>
    </defs>
    <text
      y={18}
      fontFamily="Virgil, Segoe UI Emoji"
      fontSize={20}
      fill="#495057"
      style={{
        whiteSpace: "pre",
      }}
      transform="translate(16.1 10)"
    >
      {"Hist\xF3ria > 1945"}
    </text>
    <path
      d="M9.94 20.026c288.74-.12 577.08-.7 800.65-.13m-800.49-.39c256.05 2.99 512.92 2.88 800.84.03m-.38-.02c.2 2.95.47 5.18.37 9.27m.59-9.01c-.8 3.34-.1 6.05-.13 9.93m-.15 0c-187.31-3.62-373.52-2.7-800.9-.69m800.57.52c-169.97-1.93-340.11-2.45-801.23-.18m1.09-.6c-1.15-2.07-1.36-4.79-.52-8.45m-.61 9.26c.02-3.18-.1-6.68.64-9.33"
      stroke="transparent"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)

export default SvgComponent
