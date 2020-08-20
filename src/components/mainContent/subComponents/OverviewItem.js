import React from "react"


const OverviewItem = (props) => {
  return (
    <React.Fragment>
      <div className={props.overviewItemClass}>
        <div className="overview-item--top">
          <img className="" src={ require('../../../images/shopping-bag.svg')} alt=""/>
          <span className="overview-num">{props.overviewNum}</span>
        </div>
        <span className="overview-text">{props.overviewText}</span>
      </div>
    </React.Fragment>
  )
}

export default OverviewItem