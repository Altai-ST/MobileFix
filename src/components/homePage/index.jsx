import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation'
import styled from './home.module.scss'
export default function HomePage() {
  return (
    <div className={styled.container}>
        <Navigation first='Firmware' second='Exit' third='Repair' four='Check Status' five='Replace' />
        <Outlet/>
    </div>
  )
}
