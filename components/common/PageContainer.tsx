import {CSSProperties, ReactNode} from 'react'

interface PageContainerProps {
  style?: CSSProperties,
  children: ReactNode,
}

export default function BasicPage(props: PageContainerProps) {
  return (
    <div style={{marginLeft: 'auto', marginRight:"auto", marginTop: "auto", marginBottom: 'auto', ...props.style}}>
      {props.children}
    </div>
  )
}
