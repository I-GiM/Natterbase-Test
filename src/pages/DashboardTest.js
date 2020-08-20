import React, { Fragment } from "react"
import Sidebar from '../components/sidebar/Sidebar'
import Header from "../components/Header"
import MainContentHeader from "../components/mainContent/MainContentHeader"
import MainContentTest from "../components/mainContent/MainContentTest"
import {Link} from "react-router-dom";



const DashboardTest = () => {
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
          {/*  ownerImage={ orgOwner.ownerTwo.ownerImage }*/}
          {/*  ownerName={ orgOwner.ownerTwo.ownerName }*/}
          {/*  ownerEmail={ orgOwner.ownerTwo.ownerEmail }*/}
          {/*/>*/}
          <Header
            orgImage={ 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597790132/Natterbase%20Test/fcmb-logo_z48sqr.svg' }
            orgName={ 'FCMB Mobile Money' }
            ownerRole={ require('../images/role-icon.svg') }
            ownerBadge={ require('../images/badge-icon.svg') }
            ownerImage={ 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597788303/Natterbase%20Test/mark-dawn_n6hjzc.png' }
            ownerName={ 'Mark Dawn' }
            ownerEmail={ 'Markdawn@natterbase' }
          />
          <Link style={{
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'margin': '10px 6.9vw',
            'width': '300px',
            'height': '32px',
            'background': '#F15832',
            'color': '#FFFFFF',
            'borderRadius': '5px',
            'fontFamily': `'Nunito Sans', sans-serif`,
            'fontWeight': '700',
            'fontSize': '1rem'
          }} title='Go to the Test Cases Implementation' to='/'>Go to Created Successfully</Link>
          <div className="dashboard-content">
            <MainContentHeader
              firstLink={ 'Overview' }
              secondLink={ 'Teams' }
              thirdLink={ 'Test'}
              fourthLink={ 'Files' }
              fifthLink={ 'Progress' }
              deadlineIcon={ require('../images/deadline-calendar-icon.svg') }
              limit={ '10-June-2020' }
            />
            <MainContentTest />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default DashboardTest