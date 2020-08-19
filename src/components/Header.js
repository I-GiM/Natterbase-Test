// Dashboard Header Component
import React, { Fragment } from 'react';


const Header = (props) => {
  let orgInfo = {
    'orgName': 'FCMB Mobile Money',
    'orgLogo': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597790132/Natterbase%20Test/fcmb-logo_z48sqr.svg',
  }
  let orgOwner = {
    'ownerOne': {
      'ownerName': 'Chioma Davis',
      'ownerEmail': 'Chioma@natterbase',
      'ownerImage': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597788303/Natterbase%20Test/chioma-davis_vh5ol4.png'
    },
    'ownerTwo': {
      'ownerName': 'Mark Dawn',
      'ownerEmail': 'Markdawn@natterbase',
      'ownerImage': 'https://res.cloudinary.com/iykeoyiih/image/upload/v1597788303/Natterbase%20Test/mark-dawn_n6hjzc.png'
    }
  }
  localStorage.setItem('orgInfo', JSON.stringify(orgInfo))
  localStorage.setItem('orgOwner', JSON.stringify(orgOwner))

  return (
    <Fragment>
      <div className="header-wrap">
        <div className="header--left-items-wrap">
          <img className="header-menu-icon" src={ require('../images/header-menu-icon.svg') } alt="" />
          <div className="org-info-wrap">
            <img className="org-image" src={ props.orgImage } alt="" />
            <span className="org-name">{ props.orgName }</span>
            <img className="more-icon" src={ require('../images/more-icon-vertical-bold.svg')} alt="" />
          </div>
          <div className="header--search-wrap">
            <img className="header--search-icon" src={ require('../images/search-icon.svg') } alt="" />
            <input className="header--search-input" type="search" alt="" placeholder="Search"/>
          </div>
        </div>
        <div className="header--right-items-wrap">
          <img className="header--notification" src={ require('../images/notification-unread-icon.svg') } alt="" />
          <img className="header--role-icon" src={ props.ownerRole } alt="" />
          <img className="header--badge-icon" src={ props.ownerBadge } alt="" />
          <div className="owner-details-wrap">
            <img className="owner-image" src={ props.ownerImage } alt="" />
            <div className="owner-info-wrap">
              <span className="owner-name">{ props.ownerName }</span>
              <span className="owner-email">{ props.ownerEmail }</span>
            </div>
            <img className="chevron-down" src={ require('../images/chevron-down.svg') } alt=""/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header