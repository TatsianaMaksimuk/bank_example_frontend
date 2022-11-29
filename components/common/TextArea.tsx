import { ChangeEventHandler, CSSProperties, FC } from "react";

interface InputProps {
  style?: CSSProperties,
  placeholder?: string,
  onChange: ChangeEventHandler,
  value: any,
  id: string,
}

const TextArea: FC<InputProps> = (props) => {
  const defaultStyle: CSSProperties = {
    border: '1px solid #d9d9d9',
    paddingRight: 5,
    paddingLeft: 10,
    width: '100%',
    minWidth: 250,
    margin: 0,
    minHeight: 30,
    borderRadius: 5,
    flex: 1,
    backgroundColor: '#eee',
    fontSize: 18,
    fontFamily: 'inherit'
  }

  return (
    <textarea 
      style={{...defaultStyle, ...props.style}}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      id={props.id}
    />
  )
}

export default TextArea