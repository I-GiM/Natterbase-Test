// MainContent Module Section
import React from "react"
import { TestFilled } from "./subComponents/Modules";
import AddedTestCase from "./subComponents/AddedTestCase";
import QuickOverview from "./QuickOverview";


const MainContentTest = () => {

  return (
    <React.Fragment>
      <div className="all-test--wrap">
        <TestFilled testTitle={ 'Modules' } />
        <AddedTestCase />
        <QuickOverview />
      </div>
    </React.Fragment>
  )
}

export default MainContentTest