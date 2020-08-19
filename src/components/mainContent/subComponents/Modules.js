// Modules Section
import React from "react"
import ModuleItem from "./ModuleItem";


export const ModuleFilled = ({ moduleTitle }) => {
  const moduleItemList = [
    <ModuleItem itemTitle={ `Apply gredient colours on the\ndashboard sidenav`} />,
    <ModuleItem itemTitle={ `Apply gredient colours on the\ndashboard sidenav`} />,
    <ModuleItem itemTitle={ `Apply gredient colours on the\ndashboard sidenav`} />,
    <ModuleItem itemTitle={ `Apply gredient colours on the\ndashboard sidenav`} />,
    <ModuleItem itemTitle={ `Apply gredient colours on the\ndashboard sidenav`} />,
    <ModuleItem itemTitle={ `Apply gredient colours on the\ndashboard sidenav`} />,
  ]
  return (
    <div className="module-wrap">
      <div className="module-title-wrap">
        <div className="module-title">{ moduleTitle }</div>
        <img className="module-more-icon" src={ require('../../../images/more-vertical-small.svg')} alt="" />
      </div>
      <div className="add-module">
        <img className="add-module--icon" src={ require('../../../images/plus-icon.svg')} alt="" />
      </div>
      <div className="module-filled">
        <div className="add-module-item">
          <textarea className="add-module-item--textarea"></textarea>
        </div>
        <React.Fragment>
          {moduleItemList.map((moduleItem, index) => (
            <React.Fragment key={index}>{ moduleItem }</React.Fragment>
          ))}
        </React.Fragment>
      </div>
    </div>
  )
}

export const ModuleEmpty = ({ moduleTitle }) => {
  return (
    <div className="module-wrap">
      <div className="module-title-wrap">
        <div className="module-title">{ moduleTitle }</div>
        <img className="module-more-icon" src={ require('../../../images/more-vertical-small.svg')} alt="" />
      </div>
      <div className="add-module">
        <img className="add-module--icon" src={ require('../../../images/plus-icon.svg')} alt="" />
      </div>
      <div className="module-empty"></div>
    </div>
  )
}