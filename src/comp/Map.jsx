import React, { useState } from 'react'
import Data from '../Data'
import Structure from './Structure'


const Map = () => {
  const [data, setdata] = useState(Data);
  
  console.log(data[0].names);
  return (
<div>
  
  
    {
        data.map((val) =>  {
          return (
            
           <Structure name={val.names} img={val.imgs}/>
           
          )
          
          
        })
      }

  </div>
  )
  
  

      
  
}

export default Map