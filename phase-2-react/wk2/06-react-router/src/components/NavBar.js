/* eslint-disable */
import NavItem from "./NavItem"

const NavBar = ({ color, navArray, setActive }) => {
  const createNavBar = (array) => {
    return array.map((navItem) => {
      return <NavItem key={navItem.title} nav={navItem} setActive={setActive} />
    })
  }

  return (
    <div className={`ui inverted ${color} tabular menu`}>
      {createNavBar(navArray)}
    </div>
  )
}

export default NavBar
