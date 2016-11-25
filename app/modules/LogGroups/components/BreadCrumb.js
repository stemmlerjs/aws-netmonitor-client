import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function BreadCrumb ({currentCrumb, allCrumbs}) {
  return (
    <ol className="breadcrumb">
      {allCrumbs.map((crumb) => {
        return <li key={crumb.page} 
                  className={crumb.currentCrumb == crumb.page ? "breadcrumb-item active" : "breadcrumb-item"}>
                    <Link to={crumb.link}>{crumb.page}</Link>
                </li>
      })}

    </ol>
  )
}