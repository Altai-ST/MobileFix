import React, { useState } from 'react'
import styled from '../../repairOrder/repairOrder.module.scss'
import { partPhone } from '../../repairPage/data'
import Select from 'react-select'
export default function SuplierDeliver() {

  const [number, setNumber] = useState('');
  const [koef, setKoef] = useState(
    {
        cost: 0,
    }
);

  const handleCost =(val)=>{
    switch (val.value) {
      case 'Baterry':
          setKoef({...koef, cost: 13})
          break;
      case 'Display':
          setKoef({...koef, cost: 70})
          break;
      case 'Processor':
          setKoef({...koef, cost: 70})
          break;
      case 'MatherPlate':
          setKoef({...koef, cost: 35})
          break;
      case 'RAM':
          setKoef({...koef, cost: 25})
          break;
    default:
      break;
  }
  }

  const handleChange=(val)=>{
      if(val.target.value.match(/^[0-9]$/)){
        setNumber(val.target.value)
      }
  }

  return (
    <div className={styled.container}>
        <h2>Orders</h2>
        <form action="" className={styled.forms}>
          <Select className={styled.sel} onChange={handleCost} options={partPhone}/>
          <input className={styled.inputs} onChange={handleChange} type="number" value={number}/>
          <p className={styled.cost}>Cost: {koef.cost * number} $</p>
          <button>Deliver</button>
        </form>
    </div>
  )
}