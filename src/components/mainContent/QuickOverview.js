import React from "react"
import OverviewItem from "./subComponents/OverviewItem"


const QuickOverview = () => {
  const overviewItemList = [
    <OverviewItem
      overviewItemClass={'overview-item-wrap-1'}
      overviewNum={'20'}
      overviewText={'Total Modules'}
    />,
    <OverviewItem
      overviewItemClass={'overview-item-wrap-2'}
      overviewNum={'20'}
      overviewText={'Improvement'}
    />,
    <OverviewItem
      overviewItemClass={'overview-item-wrap-3'}
      overviewNum={'14'}
      overviewText={'Total Modules test'}
    />,
    <OverviewItem
      overviewItemClass={'overview-item-wrap-4'}
      overviewNum={'20'}
      overviewText={'Total Failed'}
    />,
    <OverviewItem
      overviewItemClass={'overview-item-wrap-5'}
      overviewNum={'20'}
      overviewText={'Total Passed'}
    />,
    <OverviewItem
      overviewItemClass={'overview-item-wrap-6'}
      overviewNum={'20'}
      overviewText={'Total Untested'}
    />,
  ]
  return (
    <React.Fragment>
      <div className="quick-overview-wrap">
        <span className="added-title">Quick Overview</span>
        <div className="overview-wrap">
          {overviewItemList.map((overviewItem, index) => (
            <React.Fragment key={index}>{overviewItem}</React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default QuickOverview