import React, { useState } from 'react'
import { brand, servicePhone } from '../repairPage/data';
import styled from './firmware.module.scss'
import Select from 'react-select'
import { useDispatch } from 'react-redux';
import img1 from '../../images/samsung1.jpg'
import img2 from '../../images/nokia1.webp'
import img3 from '../../images/iphone1.jpg'
import img4 from '../../images/redmi1.jpg'
import img5 from '../../images/oneplus1.jpg'
import { addPhone } from '../../store/reducers/phoneSlice';
export default function FirmWare() {

  const [formData, setFormData] = useState({
    model:'',
    cost:0,
    option:''
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
        setNewImg(img5)
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
      case 'Dust cleaning':
        setKoef({...koef, cost: 5})
        setFormData({...formData, option: "Dust cleaning", cost: Math.round(5 * koef.koeficent)})
        break;
      case 'Scratch cleaning':
        setKoef({...koef, cost: 10})
        setFormData({...formData, option: "Scratch cleaning", cost: Math.round(10 * koef.koeficent)})
        break;
      default:
        break;
    }
  }

  const [pass, setPass] = useState('')

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(postPhone(formData))
    console.log(formData)
    setPass('agh123')
    dispatch(addPhone(formData))
  };


    
      return (
        <div className={styled.container}>
          <div className={styled.formBlock}>
            <h2>Firmware Form</h2>
            <form onSubmit={handleSubmit} action="" className={styled.forms}>
              <p>Brand:</p>
                <Select className={styled.sel} onChange={handleSelect} options={brand}/>
              <p>What service:</p>
                  <Select className={styled.sel} onChange={handleCost} options={servicePhone}/>
              <p>Cost: {Math.round(koef.cost * koef.koeficent)} $</p>
              {pass !== '' ? <p>Code: {pass}</p> : ''}
              <button type='submit'>Send</button>
            </form>
          </div>
          <div className={styled.phoneBlock}>
            <img src={newImg} alt="" width="50%"/>
          </div>
        </div>
      );
}
