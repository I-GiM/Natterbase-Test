// Dashboard Sidebar Component
import React from "react"
import UserIcon from "./UserIcon"


const Sidebar = () => {
  //Set Users to local storage to get initials

  // const url = 'http://localhost:3000/'
  const url = 'https://natterbase-app-test.surge.sh/'
  const hideHome = () => {
    if (window.location.href === url) {
      return <div className="menu-icon">
        <img src={require('../../images/home-icon.svg')} alt=""/>
      </div>
    } else {
      return ''
    }
  }

  const users = {
    one: {'name': 'Precious Njama'},
    two: {'name': 'Jamal Ifeoluwa'},
    three: {'name': 'Lasisi Gambo'},
    four: {'name': 'Amaka Wike'},
    five: {'name': 'Anita West'}
  }
  localStorage.setItem('users', JSON.stringify(users))
  const getUsers = JSON.parse(localStorage.getItem('users'))

  // Pass styles and user initials to user icon components
  const userList = [
    <UserIcon
      className={'user-icon--bg-color-1'}
      initials={getUsers.one.name.charAt(0)+getUsers.one.name.charAt(9)}
    />,
    <UserIcon
      className={'user-icon--bg-color-2'}
      initials={getUsers.two.name.charAt(0)+getUsers.two.name.charAt(6)}
    />,
    <UserIcon
      className={'user-icon--bg-color-3'}
      initials={getUsers.three.name.charAt(0)+getUsers.three.name.charAt(7)}
    />,
    <UserIcon
      className={'user-icon--bg-color-4'}
      initials={getUsers.four.name.charAt(0)+getUsers.four.name.charAt(6)}
    />,
    <UserIcon
      className={'user-icon--bg-color-5'}
      initials={getUsers.five.name.charAt(0)+getUsers.five.name.charAt(6)}
    />,
  ]

  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="logo-wrap">
          <img className="logo" src={require('../../images/logo.svg')} alt=""/>
        </div>
        <div className="menu-wrap">
          { hideHome() }
          <div className="menu-icon menu-icon--background">
            <img src={require('../../images/module-icon.svg')} alt=""/>
          </div>
          <div className="menu-icon">
            <img src={require('../../images/users-icon.svg')} alt=""/>
          </div>
          <div className="menu-icon">
            <img src={require('../../images/sub-icon.svg')} alt=""/>
          </div>
        </div>
        <div className="users-wrap">
          {userList.map((user, index) => (
            <React.Fragment key={index}>{user}</React.Fragment>
          ))}
        </div>
        <div className="collapse-icon-wrap">
          <img src={require('../../images/collapse-icon.svg')} alt=""/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar