import './index.css'

const TabItem = props => {
  const {tabDetails, clickTab} = props
  const {tabId, displayText} = tabDetails
  const isActive = tabDetails.tabId ? 'tabItem1' : ''

  const onClickTab = () => {
    clickTab(tabId)
  }

  return (
    <li className="tabItem-container">
      <button type="button" className={isActive} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
