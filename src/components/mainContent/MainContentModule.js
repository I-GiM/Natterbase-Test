// MainContent Module Section
import React from "react"
import { ModuleFilled, ModuleEmpty } from "./subComponents/Modules";


const MainContentModule = () => {
  const moduleList = [
    <ModuleFilled
      moduleTitle={ 'Backlog' }
    />,
    <ModuleEmpty
      moduleTitle={ 'Todo' }
    />,
    <ModuleEmpty
      moduleTitle={ 'In Progress' }
    />,
    <ModuleEmpty
      moduleTitle={ 'In Review' }
    />,
    <ModuleEmpty
      moduleTitle={ 'Done' }
    />,
  ]
  return (
    <React.Fragment>
      <div className="all-modules--wrap">
        {moduleList.map((module, index) => (
          <React.Fragment key={index}>{ module }</React.Fragment>
        ))}
      </div>
      <img className="module-add-icon" src={ require('../../images/add-icon.svg') } alt="" />
    </React.Fragment>
  )
}

export default MainContentModule