import React from "react";

type ButtonProps = {
  label: string
}

const Button = (props: ButtonProps) => {
  return (
    <button className="button">
      <p>{props.label}</p>
    </button>
  )
}

export default Button
