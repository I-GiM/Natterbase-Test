// Module Items
import React from "react"


const ModuleItem = (props) => {
  localStorage.setItem('devs', JSON.stringify(
    {
      'devOne': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597864376/Natterbase%20Test/dev-1_cutshc.png',
      'devTwo': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597864376/Natterbase%20Test/dev-2_e6h0rt.png',
      'devThree': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597864376/Natterbase%20Test/dev-3_fm3ubr.png',
      'devFour': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597864376/Natterbase%20Test/dev-4_eau2eu.png',
      'devFive': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597864376/Natterbase%20Test/dev-1_cutshc.png',
      'devSix': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597864376/Natterbase%20Test/dev-2_e6h0rt.png',
      'devSeven': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597864376/Natterbase%20Test/dev-3_fm3ubr.png',
      'devEight': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597864376/Natterbase%20Test/dev-4_eau2eu.png'
    }
  ))
  const getDevImages = JSON.parse(localStorage.getItem('devs'))

  const devList = [
    <img style={{'marginRight': '-5px'}} className="dev-list" src={ getDevImages.devOne } alt=""/>,
    <img style={{'marginRight': '-5px'}} className="dev-list" src={ getDevImages.devTwo } alt=""/>,
    <img style={{'marginRight': '-5px'}} className="dev-list" src={ getDevImages.devThree } alt=""/>,
    <img style={{'marginRight': '-5px'}} className="dev-list" src={ getDevImages.devFour } alt=""/>,
    <img className="dev-list" src={ getDevImages.devFive } alt=""/>,
    <img className="dev-list" src={ getDevImages.devSix } alt=""/>,
    <img className="dev-list" src={ getDevImages.devSeven } alt=""/>,
    <img className="dev-list" src={ getDevImages.devEight } alt=""/>,
  ]
  const visibleDev = devList.slice(0, 4)
  const hiddenDev = devList.slice(4)

  return (
    <div className="module-item-wrap">
      <div className="module-item--title-wrap">
        <div className="module-item--title">{ props.itemTitle }</div>
        <img className="module-more-icon" src={ require('../../../images/more-vertical-small.svg')} alt="" />
      </div>
      <div className="module-item--details">
        <div className="module-item--date">
          <span className="module-item--details-text"><img className=".bottom-alert--img" src={ require('../../../images/due-date-icon.svg')} alt=""/> Due Aug 8</span>
        </div>
        <div className="module-item--devs">
          {visibleDev.map((dev, index) => (
            <React.Fragment key={index}>{dev}</React.Fragment>
          ))}
            <span className="dev-hidden">{ `+${hiddenDev.length}` }</span>
        </div>
      </div>
    </div>
  )
}

export default ModuleItem