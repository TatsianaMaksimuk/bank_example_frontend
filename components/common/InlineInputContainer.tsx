import { CSSProperties, FC, Fragment, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode,
  style?: CSSProperties,
  error?: string,
  className?: string,
}

const defaultStyles: {
  container: CSSProperties,
  error: CSSProperties,
} = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: '0.5rem'
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    padding: '0.375rem 0.5rem',
    margin: "0 0 0.375rem 0",
  }
}

const InlineInputContainer: FC<ContainerProps> = (props) => {
  return (
    <Fragment>
      {props.error ? <p style={defaultStyles.error}>{props.error}</p> : null}
      <div style={{...defaultStyles.container, ...props.style}} className={props.className}>
        {props.children}
      </div>
    </Fragment>
  )
}

export default InlineInputContainer;

