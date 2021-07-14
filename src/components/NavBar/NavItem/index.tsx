import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'

const NavItem = ({ className, href, title, ...rest }: any) => (
  <div>
    <RouterLink to={href}>
      <span>{title}</span>
    </RouterLink>
  </div>
)

export default NavItem
