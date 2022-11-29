import { ChangeEventHandler, CSSProperties, FC, Fragment } from "react";

interface InputProps {
  error?: string,
  style?: CSSProperties,
  errorStyle?: CSSProperties,
  id: string,
  type?: string,
  placeholder?: string, //adds text to field itself, if you don't use label props make sure to use this
  onChange: ChangeEventHandler,
  required?: boolean,
  value?: any, //required if type is not file
  accept?: string, //used by an input type of "file"
  multiple?: boolean, //used by an input type of "file"
  disabled?: boolean,
  label?: boolean, //will add a text label above the input fiels
  className?: string,
  errorClassName?: string,
  min?: number, //used by an input type of Number
  max?: number, //used by an input type of Number
  step?: number, //used by an input type of Number
}

export interface fileQuery {
  file?: File,
  url: string,
}

interface Styles { 
  input: CSSProperties,
  label: CSSProperties,
  container: CSSProperties,
  inputError: CSSProperties,
  error: CSSProperties,
}

const defaultStyles: Styles = {
  input: {
    color: "#000",
    backgroundColor: "#eee",
    padding: 5,
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    flex:1,
    height: "auto",
    minWidth: '100px',
    borderRadius: '0.75rem',
    margin: ".50rem .5rem .5rem 0px"
  },
  label: {
    textAlign: "left",
    margin: "0 0.50rem",
    fontWeight: 'bold',
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  inputError: {
    color: "#000",
    backgroundColor: "#eee",
    padding: 5,
    fontSize: 18,
    borderColor: "red",
    borderWidth: 2,
    width: "60%",
    height: "auto",
    flex: 1,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 3,
    paddingLeft: 5,
  },
}

const Input: FC<InputProps> = (props) => {

  const inputType = props.type || 'text'

  const inputPropsStyle = 
    props.error ? 
    {...props.errorStyle} :
    {...props.style} 
  
  const inputStyle = {
    ...defaultStyles.input, 
    ...inputPropsStyle
  }

  if (inputType === "file") {
    inputStyle.color = 'transparent'
  }

  const input = (
    <input 
      style={{...inputStyle, ...props.style}}
      className={ props.error ? 
        props.errorClassName
        :
        props.className
      }
      id={props.id}
      type={inputType}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required={props.disabled}
      value={props.value}
      accept={props.accept}
      multiple={props.multiple}
      disabled={props.disabled}
      min={props.min}
      max={props.max}
      step={props.step}
    />
  )

  const errorLabel = <p style={defaultStyles.error}>{props.error}</p>

  if (props.label) {
    return (
      <Fragment>
        <div style={defaultStyles.container}>
          <label htmlFor={props.id} style={defaultStyles.label}>{props.label}</label>
          {input}
        </div>
        {props.error ? errorLabel : null}
      </Fragment>
    )
  }

  return (
    <Fragment>
      {input}
      {props.error ? errorLabel : null}
    </Fragment>
  )
}

export default Input