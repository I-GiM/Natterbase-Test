// Main Content Header for Dashboard
import React from "react"


const MainContentHeader = (props) => {
  return (
    <React.Fragment>
      <div className="content-header--wrap">
        <div className="content-header--left">
          <nav className="navbar navbar-expand-lg p-0 bg-light">
            <a className="nav-link content-header--links" href="#">{props.firstLink}</a>
            <button className="content-header--collapse-btn navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="content-header--collapse-icon "></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link content-header--links" href="#">{props.secondLink}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link content-header--links selected" href="#">{props.thirdLink}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link content-header--links" href="#">{props.fourthLink}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link content-header--links" href="#">{props.fifthLink}</a>
                </li>
              </div>
            </div>
          </nav>
        </div>
        <div className="content-header--right">
          <div className="content-header--slider">
            <span className="slider--tasks">{ props.allTasks }</span>
            <div className="slider--toggle">
              <input type="checkbox" id="switch"
                     className="checkbox"/>
              <label htmlFor="switch" className="toggle"></label>
            </div>
            <span className="slider--modules">{ props.allModules }</span>
          </div>
          <div className="content-header--deadline">
            <img className="deadline-image" src={ props.deadlineIcon } alt="" />
            <span className="deadline-text">Project Deadline:</span>
            <span className="deadline-duration">{ props.limit }</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainContentHeader