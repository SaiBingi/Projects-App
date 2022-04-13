import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateProjectResults} = props
  const {tabId, displayText} = tabDetails

  const activeTabIdClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabId = () => updateProjectResults(tabId)

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabIdClassName}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
