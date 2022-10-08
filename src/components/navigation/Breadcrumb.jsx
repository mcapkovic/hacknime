import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 837.518 46.675"
    // width={1675.036}
    // height={93.35}
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
      transform="translate(41.391 10)"
    >
      {"stories > story xy"}
    </text>
    <path
      d="M9.87 12.357c271.08 1.48 541.6 2.5 817.29.19m-816.86-.42c238.94-2.97 478.69-2.45 817.31.66m1.85-.12c-.12 9.32-1.96 15.52-1.82 24.6m.5-24.99c-1.33 5.76-.45 10.93-.07 25.09m-.97-.03c-302.31.04-603.48 1.2-816.33-.08m816.97-.48c-219.91-.77-440.12-1.39-817.79.08m.81 1.24c-.46-10.24-1.88-22.12-.45-26.02m-.27 24.44c.35-8.42.3-17.91-.71-23.53"
      stroke="transparent"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)

export default SvgComponent
