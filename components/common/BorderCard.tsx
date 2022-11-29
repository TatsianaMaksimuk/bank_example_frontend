import { FC, CSSProperties, useState, ReactNode } from "react";

interface BorderCardProps {
  hoverable?: boolean,
  className?: string,
  onClick?: (data: any) => void;
  style?: CSSProperties,
  children: ReactNode,
}

const borderCardStyle: {
  card: CSSProperties,
  onHover: CSSProperties,
  offHover: CSSProperties
} = {
  card: {
    borderRadius: '1rem',
    marginBottom: '4rem',
    padding: "0 1rem",
    width: "80%",
    maxWidth: 500,
    backgroundColor: "#f7f7f7",
    border: "1px solid #010101"
  },
  onHover: {
    boxShadow: '1px 1px rbga(91, 91, 91, 0.8)',
    transition: "box-shadow .5s"
  },
  offHover: {
    boxShadow: '1px 1px rbga(91, 91, 91, 0.4)',
    transition: "box-shadow .5s"
  }
}

const BorderCard: FC<BorderCardProps> = (props) => {

  const [hover, setHover] = useState(false)

  const onMouseEnter = () => {
    if (props.hoverable) setHover(true)
  }

  const onMouseLeave = () => {
    if (props.hoverable) setHover(false)
  }

  return (
    <div
      style={
        hover ? {...borderCardStyle.card, ...borderCardStyle.onHover} : {...borderCardStyle.card, ...borderCardStyle.offHover}
      }
      onClick={props.onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={props.className}
    >
      {props.children}
    </div>
  )


}

export default BorderCard;