import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../navigation/index'

export default function SuplierMain() {
  return (
    <div>
        <Navigation first="Order list" second="Exit" third="Deliver" four="Deliver list" />
        <Outlet/>
    </div>
  )
}