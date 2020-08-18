import React, { Fragment } from "react"
import Sidebar from '../components/sidebar/Sidebar'


const DashboardModule = () => {
  return (
    <Fragment>
      <div className="dashboard-wrap">
        <Sidebar />
        <div className="">

        </div>
      </div>
      <div className="bottom-alert">
        <span className="bottom-alert--text">Modules have been created successfully</span>
      </div>
    </Fragment>
  )
}

export default DashboardModule