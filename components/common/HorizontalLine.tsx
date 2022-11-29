import { CSSProperties, FC } from "react";

const HorizontalLine: FC<{style: CSSProperties}> = ({style}) => {
  return (
    <div style={{
      height: 1,
      backgroundColor: "#111111",
      width: "100%",
      ...style
    }}></div>
  )
}

export default HorizontalLine;