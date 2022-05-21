import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../navigation/index'

export default function WorkerMain() {
  return (
    <div>
        <Navigation first="Repair List" second="Exit" third="Replace List" four="Service List" five="Largest Order" six="Smallest Order"/>
        <Outlet/>
    </div>
  )
}