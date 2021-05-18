import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({fourSushis, moreSushi, eat, eaten, allSushis}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          fourSushis.map(sushi => {
            return <Sushi sushi={sushi} eat={eat} eaten={eaten} allSushis={allSushis}/>
          })
        }
        <MoreButton moreSushi={moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer