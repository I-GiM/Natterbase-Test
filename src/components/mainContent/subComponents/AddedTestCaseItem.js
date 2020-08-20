import React, {useEffect, useRef} from "react"


const AddedTestCaseItem = (props) => {
  const testTypeSelect = useRef()
  const btn = useRef()
  const optionPass = useRef()
  const optionPassInner = useRef()
  const optionFailed = useRef()
  const optionFailedInner = useRef()
  const optionRetest = useRef()
  const optionRetestInner = useRef()
  const optionUntest = useRef()
  const optionUntestInner = useRef()

  const btnClick = () => {
    testTypeSelect.current.classList.toggle('show')
  }

  const innerSelectPass = () => {
    btn.current.innerHTML = 'Pass'
    btn.current.classList.add('added-item--selected-pass')
    btn.current.classList.remove('added-item--selected-failed')
    btn.current.classList.remove('added-item--selected-retest')
    btn.current.classList.remove('added-item--selected-untest')
    optionPass.current.style.backgroundColor = 'rgba(232, 231, 234, 0.3)'
    optionPassInner.current.classList.add('added-test--select-inner')
    optionFailed.current.style.backgroundColor = ''
    optionFailedInner.current.classList.remove('added-test--select-inner')
    optionRetest.current.style.backgroundColor = ''
    optionRetestInner.current.classList.remove('added-test--select-inner')
    optionUntest.current.style.backgroundColor = ''
    optionUntestInner.current.classList.remove('added-test--select-inner')
    testTypeSelect.current.classList.toggle('show')
  }
  const innerSelectFailed = () => {
    btn.current.innerHTML = 'Failed'
    btn.current.classList.add('added-item--selected-failed')
    btn.current.classList.remove('added-item--selected-pass')
    btn.current.classList.remove('added-item--selected-retest')
    btn.current.classList.remove('added-item--selected-untest')
    optionPass.current.style.backgroundColor = ''
    optionPassInner.current.classList.remove('added-test--select-inner')
    optionFailed.current.style.backgroundColor = 'rgba(232, 231, 234, 0.3)'
    optionFailedInner.current.classList.add('added-test--select-inner')
    optionRetest.current.style.backgroundColor = ''
    optionRetestInner.current.classList.remove('added-test--select-inner')
    optionUntest.current.style.backgroundColor = ''
    optionUntestInner.current.classList.remove('added-test--select-inner')
    testTypeSelect.current.classList.toggle('show')
  }
  const innerSelectRetest = () => {
    btn.current.innerHTML = 'Retest'
    btn.current.classList.add('added-item--selected-retest')
    btn.current.classList.remove('added-item--selected-failed')
    btn.current.classList.remove('added-item--selected-pass')
    btn.current.classList.remove('added-item--selected-untest')
    optionPass.current.style.backgroundColor = ''
    optionPassInner.current.classList.remove('added-test--select-inner')
    optionFailed.current.style.backgroundColor = ''
    optionFailedInner.current.classList.remove('added-test--select-inner')
    optionRetest.current.style.backgroundColor = 'rgba(232, 231, 234, 0.3)'
    optionRetestInner.current.classList.add('added-test--select-inner')
    optionUntest.current.style.backgroundColor = ''
    optionUntestInner.current.classList.remove('added-test--select-inner')
    testTypeSelect.current.classList.toggle('show')
  }
  const innerSelectUntest = () => {
    btn.current.innerHTML = 'Untest'
    btn.current.classList.add('added-item--selected-untest')
    btn.current.classList.remove('added-item--selected-failed')
    btn.current.classList.remove('added-item--selected-pass')
    btn.current.classList.remove('added-item--selected-retest')
    optionPass.current.style.backgroundColor = ''
    optionPassInner.current.classList.remove('added-test--select-inner')
    optionFailed.current.style.backgroundColor = ''
    optionFailedInner.current.classList.remove('added-test--select-inner')
    optionRetest.current.style.backgroundColor = ''
    optionRetestInner.current.classList.remove('added-test--select-inner')
    optionUntest.current.style.backgroundColor = 'rgba(232, 231, 234, 0.3)'
    optionUntestInner.current.classList.add('added-test--select-inner')
    testTypeSelect.current.classList.toggle('show')
  }
  useEffect(() => {
    const checkInner = () => {
      const check = btn.current.innerText

      if (check === 'Pass') {
        btn.current.classList.add('added-item--selected-pass')
      } else if (check === 'Failed') {
        btn.current.classList.add('added-item--selected-failed')
      } else if (check === 'Retest') {
        btn.current.classList.add('added-item--selected-retest')
      } else if (check === 'Untest') {
        btn.current.classList.add('added-item--selected-untest')
      } else {
        return false
      }
    }
    checkInner()
  }, [])

  return (
    <React.Fragment>
      <div className="added-test-item">
        <span className="added-test-item--title">{props.addedTitle}</span>
        <div className="added-test--dropdown-wrap">
          <img onClick={btnClick} className="added-item--chevron" src={ require('../../../images/small-chevron-down-white.svg')} alt="" />
          <div ref={btn} onClick={btnClick} className="added-item--button">
            {props.defaultButton}
          </div>
          <div ref={testTypeSelect} className="added-test--dropdown">
            <div className="added-test--search-wrap">
              <img className="" src={ require('../../../images/small-search-icon.svg')} alt=""/>
              <input className="added-test--search-input" type="text" value="Search name" onKeyUp="filterFunction()"/>
              <img className="" src={ require('../../../images/small-chevron-down.svg')} alt=""/>
            </div>
            <div className="added-test--option" ref={optionPass} onClick={innerSelectPass} >Pass<span ref={optionPassInner}></span></div>
            <div className="added-test--option" ref={optionFailed} onClick={innerSelectFailed}>Failed<span ref={optionFailedInner}></span></div>
            <div className="added-test--option" ref={optionRetest} onClick={innerSelectRetest}>Retest<span ref={optionRetestInner}></span></div>
            <div className="added-test--option" ref={optionUntest} onClick={innerSelectUntest}>Untest<span ref={optionUntestInner}></span></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddedTestCaseItem