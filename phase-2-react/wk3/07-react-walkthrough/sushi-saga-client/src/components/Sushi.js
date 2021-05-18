import React, { Fragment, Suspense } from 'react'

const Sushi = ({sushi, eat, eaten, allSushis}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={eat}>
        { 
          eaten.includes(sushi)
          ?
            null
          :
            <img src={sushi.img_url} alt="nuupe" id={sushi.id} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi