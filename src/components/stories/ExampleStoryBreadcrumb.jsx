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
    <path
      d="M9.76 18.06c295.6-2.54 591.13-3.47 800.6-.24m-800.04-.21c168.74-2.19 338.21-2.13 800.69.05m-.18.79c-.28 1.82-.43 3.94-.15 8.67m-.08-8.79c.2 1.89 1.02 4.15.54 9.14m-.5.67c-183.65-1.07-369.53-1.07-800.17-.55m800.5.32c-284.29-3.75-568.83-3.14-801.05-.64m.63.03c.25-4.07-.65-6.78-1.36-9.58m.58 9.83c.44-3.49.08-7.73.47-9.47"
      stroke="transparent"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
    />
    <text
      y={18}
      fontFamily="Virgil, Segoe UI Emoji"
      fontSize={20}
      fill="#495057"
      style={{
        whiteSpace: "pre",
      }}
      transform="translate(20.835 10)"
    >
      {"Pr\xEDbehy > 1945 > z povstania "}
    </text>
  </svg>
)

export default SvgComponent
