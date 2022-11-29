import { CSSProperties, FC, ReactNode } from "react";

interface OverlayProps {
  children: ReactNode,
  active?: boolean,
  style?: CSSProperties,
  className?: string
}

const overlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: "rgb(75 85 99 0.5)",
  overflowY: 'auto',
  height: '100%',
  width: "100%",
  zIndex: 100,
}

const Overlay: FC<OverlayProps> = (props) => {
  return (
    <div style={{...overlayStyle, ...props.style, display: props.active ? "block" : "none"}} className={props.className}>
      {props.children}
    </div>
  )
}

export default Overlay;