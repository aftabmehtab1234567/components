import React from 'react'
import Map from './Map';

const Structure = (props) => {
  console.log(props);
  return (
    <>
    <div className="card" style={{width: "18rem"}}>
      <div className="row">
    <img src= {props.img} />
  <div className="card-body">
  <h1>{props.name}</h1>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
    
  
    </>
  )
}

export default Structure