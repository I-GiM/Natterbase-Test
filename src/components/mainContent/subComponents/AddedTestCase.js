import React from "react"
import AddedTestCaseItem from "./AddedTestCaseItem";


const AddedTestCase = () => {
  const addedList = [
    <AddedTestCaseItem
      addedTitle={ 'Make the background image blur' }
      defaultButton={ 'Pass' }
    />,
    <AddedTestCaseItem
      addedTitle={ 'Apply gredient colours on the\nnavigation' }
      defaultButton={ 'Failed' }
    />,
    <AddedTestCaseItem
      addedTitle={ 'Make the background image blur' }
      defaultButton={ 'Pass' }
    />,
    <AddedTestCaseItem
      addedTitle={ 'Apply gredient colours on the\nnavigation' }
      defaultButton={ 'Retest' }
    />,
    <AddedTestCaseItem
      addedTitle={ 'Make the background image blur' }
      defaultButton={ 'Pass' }
    />,
    <AddedTestCaseItem
      addedTitle={ 'Make the background image blur' }
      defaultButton={ 'Failed' }
    />,
    <AddedTestCaseItem
      addedTitle={ 'Apply gredient colours on the\nnavigation' }
      defaultButton={ 'Retest' }
    />,
    <AddedTestCaseItem
      addedTitle={ 'Make the background image blur' }
      defaultButton={ 'Pass' }
    />,
    <AddedTestCaseItem
      addedTitle={ 'Make the background image blur' }
      defaultButton={ 'Untest' }
    />,
    <AddedTestCaseItem
      addedTitle={ 'Apply gredient colours on the\nnavigation' }
      defaultButton={ 'Retest' }
    />,
    <AddedTestCaseItem
      addedTitle={ 'Make the background image blur' }
      defaultButton={ 'Untest' }
    />,
  ]
  return (
    <React.Fragment>
      <div className="added-test-wrap">
        <span className="added-title">Added Test Case</span>
        <div className="added-item-wrap">
          <div className="added-item--scroll">
            {addedList.map((added, index) => (
              <React.Fragment key={index}>{ added }</React.Fragment>
            ))}
          </div>
          <div className="added-test--new-test">
            <div className="added-test--new-test--new">New Test Case</div>
            <div className="added-test--new-test--test">Test</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddedTestCase