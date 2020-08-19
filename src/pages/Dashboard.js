import React, { Fragment } from "react"
import Sidebar from '../components/sidebar/Sidebar'
import Header from "../components/Header"
import MainContentHeader from "../components/mainContent/MainContentHeader";


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
          <div className="dashboard-content">
            <MainContentHeader
              firstLink={ 'Overview' }
              secondLink={ 'Teams' }
              thirdLink={ 'Modules'}
              fourthLink={ 'Files' }
              fifthLink={ 'Progress' }
              allTasks={ 'All Task' }
              allModules={ 'All Modules' }
              deadlineIcon={ require('../images/deadline-clock-icon.svg') }
              limit={ '6 weeks' }
            />
          </div>
        </div>
      </div>
      <div className="bottom-alert">
        <span className="bottom-alert--text">Modules have been created successfully</span>
      </div>
    </Fragment>
  )
}

export default DashboardModule