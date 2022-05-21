import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled  from './auth.module.scss'

export default function Auth() {
    const [btnClick, stateBtnClick] = useState({
        btn1: true,
        btn2: true
    })
    const handleClick =(val)=>{
        if(btnClick.btn1 && val.target.name === "btn1"){
            stateBtnClick({...btnClick, btn1:false })
        }else if(!btnClick.btn1 && val.target.name === "btn1"){
            stateBtnClick({...btnClick, btn1:true })
        }else if(btnClick.btn2 && val.target.name === "btn2"){
            stateBtnClick({...btnClick, btn2:false })
        }else{
            stateBtnClick({...btnClick, btn2:true })
        }
        
    }
  return (
    <div className={styled.container}>
        <h1>Authorization</h1>
        <Link to='/login'>
            <button className={btnClick.btn1 ? styled.auth : styled.authClick} name="btn1" onClick={handleClick}>Sign in</button>
        </Link>
        <Link to="/register">
            <button className={btnClick.btn2 ? styled.reg : styled.regClick} name="btn2" onClick={handleClick}>Sign up</button>
        </Link>
    </div>
  )
}
