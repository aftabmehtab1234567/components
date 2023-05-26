import React from 'react'
import Map from './Map';

const Structure = (props) => {
  console.log(props);
  return (
    <>
    <img src= {props.img} />
    <h1> {props.name}</h1>
    </>
  )
}

export default Structure