/* eslint-disable */
import { Link, withRouter } from "react-router-dom"
const NavItem = ({ nav: { title, isActive, icon, link }, setActive }) => {
  return (
    <Link to={"/" + link}>
      <a className={isActive ? "item active" : "item"}>
        <h2 className='ui header' onClick={setActive}>
          <i className={`${icon} icon`} />
          <div className='content'>{title}</div>
        </h2>
      </a>
    </Link>
  )
}

export default withRouter(NavItem)
