interface ExcelIconProps {
  size?: number
  color?: string
  className?: string
}

function ExcelIcon({ size = 15, color = '#4DA542', className }: ExcelIconProps) {
  const width = size * (12 / 15)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={size}
      viewBox="0 0 12 15"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33333 2C1.33333 1.63181 1.63181 1.33333 2 1.33333H6.85714V4.37037C6.85714 4.73856 7.15562 5.03704 7.52381 5.03704H10.6667V12.6667C10.6667 13.0349 10.3682 13.3333 10 13.3333H2C1.63181 13.3333 1.33333 13.0349 1.33333 12.6667V2ZM8.19048 2.24462V3.7037H9.69125L8.19048 2.24462ZM2 0C0.89543 0 0 0.895431 0 2V12.6667C0 13.7712 0.895431 14.6667 2 14.6667H10C11.1046 14.6667 12 13.7712 12 12.6667V4.37037C12 4.1903 11.9272 4.01789 11.7981 3.89237L7.98853 0.18867C7.86409 0.0676853 7.69737 0 7.52381 0H2ZM7.66667 5.33333H9.66667L7 8.66667L9.66667 12H7.66667L6 9.91667L4.33333 12H2.33333L5 8.66667L2.33333 5.33333H4.33333L6 7.41667L7.66667 5.33333Z"
        fill={color}
      />
    </svg>
  )
}

export default ExcelIcon
