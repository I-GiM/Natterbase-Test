import React, { Fragment } from "react"
import Sidebar from '../components/sidebar/Sidebar'
import Header from "../components/Header"


const DashboardModule = () => {
  const orgInfo = JSON.parse(localStorage.getItem('orgInfo'))
  const orgOwner = JSON.parse(localStorage.getItem('orgOwner'))

  return (
    <Fragment>
      <div className="dashboard-wrap">
        <Sidebar />
        <div className="main-wrap">
          <Header
            orgImage={ require('../images/fcmb-logo.svg') }
            orgName={ orgInfo.orgName }
            ownerRole={ require('../images/role-icon.svg') }
            ownerBadge={ require('../images/badge-icon.svg') }
            ownerImage={ require('../images/chioma-davis.png') }
            ownerName={ orgOwner.ownerOne.ownerName }
            ownerEmail={ orgOwner.ownerOne.ownerEmail }
          />
        </div>
        <div className="dashboard-content">

        </div>
      </div>
      <div className="bottom-alert">
        <span className="bottom-alert--text">Modules have been created successfully</span>
      </div>
    </Fragment>
  )
}

export default DashboardModule