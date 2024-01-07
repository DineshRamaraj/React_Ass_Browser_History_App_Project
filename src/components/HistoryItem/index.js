import './index.css'

const historyItem = props => {
  const {eachItem, onClickDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const onDelete = () => {
    onClickDelete(id)
  }

  return (
    <li className="each-list-item">
      <div className="image-time-container">
        <p className="each-item-time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="item-logo" />
        <p className="item-heading">{title}</p>
        <p className="item-domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        onClick={onDelete}
        data-testid="delete"
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default historyItem
