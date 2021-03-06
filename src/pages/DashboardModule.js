import React, { Fragment } from "react"
import Sidebar from '../components/sidebar/Sidebar'
import Header from "../components/Header"
import MainContentHeader from "../components/mainContent/MainContentHeader"
import MainContentModule from "../components/mainContent/MainContentModule"
import {Link} from "react-router-dom";


const DashboardModule = () => {
  const orgInfo = JSON.parse(localStorage.getItem('orgInfo'))
  const orgOwner = JSON.parse(localStorage.getItem('orgOwner'))

  return (
    <Fragment>
      <div className="dashboard-wrap">
        <Sidebar />
        <div className="main-wrap">
          {/*<Header*/}
          {/*  orgImage={ orgInfo.orgLogo }*/}
          {/*  orgName={ orgInfo.orgName }*/}
          {/*  ownerRole={ require('../images/role-icon.svg') }*/}
          {/*  ownerBadge={ require('../images/badge-icon.svg') }*/}
          {/*  ownerImage={ orgOwner.ownerOne.ownerImage }*/}
          {/*  ownerName={ orgOwner.ownerOne.ownerName }*/}
          {/*  ownerEmail={ orgOwner.ownerOne.ownerEmail }*/}
          {/*/>*/}
          <Header
            orgImage={ 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597790132/Natterbase%20Test/fcmb-logo_z48sqr.svg' }
            orgName={ 'FCMB Mobile Money' }
            ownerRole={ require('../images/role-icon.svg') }
            ownerBadge={ require('../images/badge-icon.svg') }
            ownerImage={ 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597788303/Natterbase%20Test/chioma-davis_vh5ol4.png' }
            ownerName={ 'Chioma Davis' }
            ownerEmail={ 'Chioma@natterbase'}
          />
          <Link style={{
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'margin': '10px 6.9vw',
            'width': '200px',
            'height': '32px',
            'background': '#F15832',
            'color': '#FFFFFF',
            'borderRadius': '5px',
            'fontFamily': `'Nunito Sans', sans-serif`,
            'fontWeight': '700',
            'fontSize': '1rem'
          }} title='Go to the Test Cases Implementation' to='/test'>Go to Test cases</Link>
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
            <MainContentModule />
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