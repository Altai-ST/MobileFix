import React from 'react'
import { Routes, Route } from "react-router-dom";
import Auth from '../auth';
import CheckStatus from '../checkStatus';
import FirmWare from '../firmware';
import HomePage from '../homePage';
import MainPage from '../mainPage';
import Register from '../register';
import RepairList from '../repairLsit';
import RepairMake from '../repairMake';
import RepairMan from '../repairMan';
import RepairOrder from '../repairOrder';
import RepairOrderList from '../repairOrderList';
import RepairPage from '../repairPage';
import RepairReplace from '../repairReplace';
import RepairService from '../repairService';
import ReplacePage from '../replacePage';
import SignIn from '../signin';
import SuplierDeliver from '../suplier/suplierDeliver';
import SuplierDeliverList from '../suplier/suplierDeliverList';
import SuplierMain from '../suplier/suplierMain';
import SuplierOrder from '../suplier/suplierOrder';
import SuplierPage from '../suplier/suplierPage';
import WorkerSmallestsOrder from '../worker/workerLittleOrder';
import WorkerMain from '../worker/workerMain';
import WorkerLargestOrder from '../worker/workerMostOrder';
import WorkerPage from '../worker/workerPage';
import WorkerRepairList from '../worker/workerRepairList';
import WorkerReplaceList from '../worker/workerReplaceList';
import WorkerServiceList from '../worker/workerServiceList';
export default function RouterPage() {
  return (
    <Routes>
        <Route path='/' element={<Auth/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/home/' element={<HomePage/>}>
          <Route path='' element={<MainPage/>}/>
          <Route path='repair' element={<RepairPage/>}/>
          <Route path='firmware' element={<FirmWare/>}/>
          <Route path='replace' element={<ReplacePage/>}/>
          <Route path='checkStatus' element={<CheckStatus/>}/>
        </Route>
        <Route path='/repairMan' element={<RepairMake/>}>
          <Route path='' element={<RepairMan/>}/>
          <Route path='makerepair' element={<RepairList/>}/>
          <Route path='makereplace' element={<RepairReplace/>}/>
          <Route path='makeservice' element={<RepairService/>}/>
          <Route path='order' element={<RepairOrder/>}/>
          <Route path='orderList' element={<RepairOrderList/>}/>
        </Route>
        <Route path='/worker' element={<WorkerMain/>}>
          <Route path='' element={<WorkerPage/>}/>
          <Route path='repairList' element={<WorkerRepairList/>}/>
          <Route path='replaceList' element={<WorkerReplaceList/>}/>
          <Route path='serviceList' element={<WorkerServiceList/>}/>
          <Route path='largestOrder' element={<WorkerLargestOrder/>}/>
          <Route path='smallestOrder' element={<WorkerSmallestsOrder/>}/>
        </Route>
        <Route path='/suplier' element={<SuplierMain/>}>
          <Route path='' element={<SuplierPage/>}/>
          <Route path='suplierOrder' element={<SuplierOrder/>}/>
          <Route path='suplierDeliver' element={<SuplierDeliver/>}/>
          <Route path='suplierDeliverList' element={<SuplierDeliverList/>}/>
        </Route>
    </Routes>
  )
}
