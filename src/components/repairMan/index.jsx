import React from 'react'
import styled from './repairMan.module.scss'
import imgPhone from "../../images/fblock.jpg";
export default function RepairMan() {
  return (
    <div className={styled.container}>
        <div className={styled.firstBlock}>
        <img src={imgPhone} className={styled.img1} alt="" width="100%" />
        <p className={styled.texth1}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, maiores
          aperiam cum ea ratione, tempore nisi consequuntur officia, quam dicta
          voluptatibus. Voluptatem repellendus ratione, rerum temporibus labore
          fugiat dicta tempora!
        </p>
      </div>
    </div>
  )
}
