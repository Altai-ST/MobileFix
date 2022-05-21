import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation'

export default function RepairMake() {
  return (
    <div>
        <Navigation first="Make Repair" second="Exit" third="Make Replace" four="Make Service" five="Orders" six="Order List and Delete"/>
        <Outlet/>
    </div>
  )
}
