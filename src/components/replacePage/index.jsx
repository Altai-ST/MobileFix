import React, { useState } from "react";
import styled from "../repairPage/repair.module.scss";
import Select from 'react-select'
import {brand, partPhone} from '../repairPage/data'
import { useDispatch } from "react-redux";
import { addPhone, postPhone } from "../../store/reducers/phoneSlice";
import img1 from '../../images/samsung1.jpg'
import img2 from '../../images/nokia1.webp'
import img3 from '../../images/iphone1.jpg'
import img4 from '../../images/redmi1.jpg'
export default function ReplacePage() {
  const [chooseBrand, setChooseBrand] = useState({
    avable: true,
  });

  const [newImg, setNewImg] = useState('');
  const [formData, setFormData] = useState({
    model:'',
    cost:0,
    option:''
  })

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
        setFormData({...formData, model: "Samsung"})
        setKoef({...koef, koeficent: 2.5})
        setNewImg(img1)
        break;
      case "Nokia":
        setChooseBrand({...chooseBrand, avable: false})
        setFormData({...formData, model: "Nokia"})
        setKoef({...koef, koeficent: 1.2})
        setNewImg(img2)
        break;
      case "Apple":
        setChooseBrand({...chooseBrand, avable: false})
        setFormData({...formData, model: "Apple"})
        setKoef({...koef, koeficent: 3})
        setNewImg(img3)
        break;
      case "Xiaomi":
        setChooseBrand({...chooseBrand, avable: false})
        setFormData({...formData, model: "Xiaomi"})
        setKoef({...koef, koeficent: 1.8})
        setNewImg(img4)
        break;
      case "Huawei":
        setChooseBrand({...chooseBrand, avable: false})
        setFormData({...formData, model: "Huawei"})
        setKoef({...koef, koeficent: 2.3})
        break;
      case "OnePlus":
        setChooseBrand({...chooseBrand, avable: false})
        setFormData({...formData, model: "OnePlus"})
        setKoef({...koef, koeficent: 2.3})
        break;
      case "Realme":
        setChooseBrand({...chooseBrand, avable: false})
        setFormData({...formData, model: "Realme"})
        setKoef({...koef, koeficent: 1.7})
        break;
      case "Oppo":
        setChooseBrand({...chooseBrand, avable: false})
        setFormData({...formData, model: "Oppo"})
        setKoef({...koef, koeficent: 2.0})
        break;
      case "Google Pixel":
        setChooseBrand({...chooseBrand, avable: false})
        setFormData({...formData, model: "Google Pixel"})
        setKoef({...koef, koeficent: 2.8})
        break;
      default:
        break;
    }
  }


  const handleCost = (val)=>{
    switch (val.value) {
        case 'Baterry':
            setKoef({...koef, cost: 13})
            setFormData({...formData, option: "Baterry", cost: Math.round(13*koef.koeficent)})
            break;
        case 'Display':
            setKoef({...koef, cost: 70})
            setFormData({...formData, option: "Display", cost: Math.round(70*koef.koeficent)})
            break;
        case 'Processor':
            setKoef({...koef, cost: 70})
            setFormData({...formData, option: "Processor", cost: Math.round(70*koef.koeficent)})
            break;
        case 'MatherPlate':
            setKoef({...koef, cost: 35})
            setFormData({...formData, option: "MatherPlate", cost: Math.round(35*koef.koeficent)})
            break;
        case 'RAM':
            setKoef({...koef, cost: 25})
            setFormData({...formData, cost: Math.round(25*koef.koeficent)})
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
    setPass('uhj569')
    dispatch(addPhone(formData))
  };
  

  return (
    <div className={styled.container}>
      <div className={styled.formBlock}>
        <h2>Replace Form</h2>
        <form action="" onSubmit={handleSubmit} className={styled.forms}>
          <p>Brand:</p>
            <Select className={styled.sel} onChange={handleSelect} options={brand}/>
          <p>What repair:</p>
            <Select className={styled.sel} onChange={handleCost} options={partPhone}/>
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