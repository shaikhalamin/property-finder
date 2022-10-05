import React from "react";

interface SeatIconProps {
  labelName: string;
  svgFill?: string;
  fillColor?: string;
}

const SeatIcon: React.FC<SeatIconProps> = ({
  labelName,
  svgFill = "#000",
  fillColor = "#fff",
}) => {
  return (
    <>
      <svg
        width="752pt"
        height="752pt"
        version="1.1"
        viewBox="0 0 752 752"
        xmlns="http://www.w3.org/2000/svg"
        fill={svgFill}
      >
        <g>
          <rect width="752" height="752" fill={fillColor} />
          <path d="m198.41 197.46c-17.523 3.7891-31.258 19.418-31.258 38.832v201.75c0 18.941 13.262 35.047 30.781 38.832v80.508c0.47656 17.523 14.207 31.73 31.73 31.73h292.2c17.523 0 31.258-14.207 31.258-31.73v-80.035c18.469-3.3164 32.203-19.418 32.203-38.832v-202.22c0-17.996-11.84-33.152-27.469-37.887-1.8945-19.891-18.469-35.52-38.832-35.52h-282.25c-19.418 0-35.992 15.156-38.359 34.57zm-17.523 240.58v-202.22c0-11.84 7.5781-21.312 17.996-24.625 3.7891 15.629 16.574 27.469 32.203 29.836v197.01c0 14.207-11.367 25.574-25.102 25.574-13.73-0.003906-25.098-11.367-25.098-25.574zm358.5 38.832v80.508c0 9.9453-8.0508 17.996-17.523 17.996h-292.2c-9.9453 0-17.523-8.0508-17.523-17.996v-80.035c18.941-2.8398 33.152-19.418 33.152-38.832v-196.06h262.84v195.59c-0.47266 19.414 13.262 35.516 31.258 38.832zm32.676-240.58v201.75c0 14.207-11.367 25.574-25.102 25.574-13.734 0-25.102-11.367-25.102-25.574v-196.54c17.051-0.94531 30.781-13.262 35.047-29.363 8.5273 4.2617 15.156 13.258 15.156 24.152zm-53.039-59.672c13.734 0 25.102 11.367 25.102 25.574 0 14.207-11.367 25.574-25.102 25.574h-282.25c-13.734 0-25.102-11.367-25.102-25.574 0-14.207 11.367-25.574 25.102-25.574z" />

          <text
            fill="#000"
            fontSize="190"
            fontWeight={`500`}
            fontFamily="Verdana"
            x="260"
            y="450"
          >
            {labelName}
          </text>
        </g>
      </svg>
    </>
  );
};

export default SeatIcon;