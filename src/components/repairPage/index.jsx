import React, { useState } from "react";
import styled from "./repair.module.scss";
import Select from 'react-select'
import {brand, repairPhone} from './data'
import img1 from '../../images/samsung1.jpg'
import img2 from '../../images/nokia1.webp'
import img3 from '../../images/iphone1.jpg'
import img4 from '../../images/redmi1.jpg'
import { useDispatch } from "react-redux";
import { addPhone } from "../../store/reducers/phoneSlice";
export default function RepairPage() {

  const [formData, setFormData] = useState({
    model:'',
    cost:0,
    option:'',
  })

  const [newImg, setNewImg] = useState('');

  const [chooseBrand, setChooseBrand] = useState({
    avable: true,
  });

  const [koef, setKoef] = useState(
    {
      cost: 0,
      koeficent: 0,
  }
  );

  const handleSelect =(val)=>{
    switch (val.value) {
      case "Samsung":
        setChooseBrand({...chooseBrand, avable: false})
        setKoef({...koef, koeficent: 2.5})
        setFormData({...formData, model: "Samsung"})
        setNewImg(img1)
        break;
      case "Nokia":
        setChooseBrand({...chooseBrand, avable: false})
        setKoef({...koef, koeficent: 1.2})
        setFormData({...formData, model: "Nokia"})
        setNewImg(img2)
        break;
      case "Apple":
        setChooseBrand({...chooseBrand, avable: false})
        setKoef({...koef, koeficent: 3})
        setFormData({...formData, model: "Apple"})
        setNewImg(img3)
        break;
      case "Xiaomi":
        setChooseBrand({...chooseBrand, avable: false})
        setKoef({...koef, koeficent: 1.8})
        setFormData({...formData, model: "Xiaomi"})
        setNewImg(img4)
        break;
      case "Huawei":
        setChooseBrand({...chooseBrand, avable: false})
        setKoef({...koef, koeficent: 2.3})
        setFormData({...formData, model: "Huawei"})
        break;
      case "OnePlus":
        setChooseBrand({...chooseBrand, avable: false})
        setKoef({...koef, koeficent: 2.3})
        setFormData({...formData, model: "OnePlus"})
        break;
      case "Realme":
        setChooseBrand({...chooseBrand, avable: false})
        setKoef({...koef, koeficent: 1.7})
        setFormData({...formData, model: "Realme"})
        break;
      case "Oppo":
        setChooseBrand({...chooseBrand, avable: false})
        setKoef({...koef, koeficent: 2.0})
        setFormData({...formData, model: "Oppo"})
        break;
      case "Google Pixel":
        setChooseBrand({...chooseBrand, avable: false})
        setKoef({...koef, koeficent: 2.8})
        setFormData({...formData, model: "Google Pixel"})
        break;
      default:
        break;
    }
  }


  const handleCost = (val)=>{
    switch (val.value) {
      case 'To fix the display':
        setKoef({...koef, cost: 50})
        setFormData({...formData, option: "To fix the display", cost: Math.round(50 * koef.koeficent)})
        break;
      case 'To fix keyboard':
        setKoef({...koef, cost: 25})
        setFormData({...formData, option: "To fix keyboard", cost: Math.round(25 * koef.koeficent)})
        break;
      case 'To fix the insides':
        setKoef({...koef, cost: 40})
        setFormData({...formData, option: "To fix the insides", cost: Math.round(40 * koef.koeficent)})
        break;
      default:
        break;
    }
  }


  const dispatch = useDispatch();
  const [pass, setPass] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(postPhone(formData))
    console.log(formData)
    setPass('hhg343')
    dispatch(addPhone(formData))
  };

  return (
    <div className={styled.container}>
      <div className={styled.formBlock}>
        <h2>Repair Form</h2>
        <form onSubmit={handleSubmit} action="" className={styled.forms}>
          <p>Brand:</p>
            <Select className={styled.sel} onChange={handleSelect} options={brand}/>
          <p>What repair:</p>
            <Select className={styled.sel} onChange={handleCost} options={repairPhone}/>
          <p>Cost: {Math.round(koef.cost * koef.koeficent)} $</p>
          {pass !== '' ? <p>Code: {pass}</p> : ''}
          <button type="submit">Send</button>
        </form>
      </div>
      <div className={styled.phoneBlock}>
        <img src={newImg} alt="" width="50%"/>
      </div>
    </div>
  );
}