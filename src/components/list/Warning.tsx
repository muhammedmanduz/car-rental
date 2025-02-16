import React from 'react'

type Props={
    children:string| JSX.Element;
}
//HOCre
const Warning = ({children}:Props) => {
  return (
    <div>{children}</div>
  )
}

export default Warning