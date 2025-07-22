import { Link } from "react-router-dom"

const Button = ( props ) => {
  return (
    <>
    <Link className="" to={props.url}>{props.text}</Link>
    </>
  )
}

export default Button