import React, { useState } from "react";
import styled from "./main.module.scss";
import imgPhone from "../../images/fblock.jpg";
import imgRepair from "../../images/rphone.jpg";
import { Link } from "react-router-dom";
export default function MainPage() {
  const [visibleImg, setVisibleImg] = useState({
    img1:true,
    img2:true,
    img3:true,
    img4:true
  });
  const handleVisible1 = () => {
    setVisibleImg({...visibleImg, img1: true});
  };
  const handleUnVisible1 = () => {
    setVisibleImg({...visibleImg, img1: false});
  };
  const handleVisible2 = () => {
    setVisibleImg({...visibleImg, img2: true});
  };
  const handleUnVisible2 = () => {
    setVisibleImg({...visibleImg, img2: false});
  };
  const handleVisible3 = () => {
    setVisibleImg({...visibleImg, img3: true});
  };
  const handleUnVisible3 = () => {
    setVisibleImg({...visibleImg, img3: false});
  };
  const handleVisible4 = () => {
    setVisibleImg({...visibleImg, img4: true});
  };
  const handleUnVisible4 = () => {
    setVisibleImg({...visibleImg, img4: false});
  };
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
      <div className={styled.secondBlock}>
        <Link to="/home/repair" className={styled.card}>
          <div
            onMouseEnter={handleUnVisible1}
            onMouseLeave={handleVisible1}
          >
            <h4 className={visibleImg.img1 ? "" : styled.texth4}>Repair phone</h4>
            <img src={imgRepair} alt="" className={visibleImg.img1 ? styled.visImg : styled.unVisImg} width="100%" />
            <p className={visibleImg.img1 ? styled.contentText : styled.contentTextVis}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Amet nihil iure alias quae? Distinctio animi natus debitis est minima quos deleniti ea, incidunt, 
              molestias neque alias eaque quis soluta tempora.</p>
            <button className={visibleImg.img1 ? styled.visBtn : styled.unVisBtn}>Read more</button>
          </div>
        </Link>
        
        <Link to="/home/firmware" className={styled.card}>
        <div
        onMouseEnter={handleUnVisible2}
        onMouseLeave={handleVisible2}
        >
          <h4 className={visibleImg.img2 ? "" : styled.texth4}>Firmware</h4>
          <img src={imgRepair} alt="" className={visibleImg.img2 ? styled.visImg : styled.unVisImg} width="100%" />
          <p className={visibleImg.img2 ? styled.contentText : styled.contentTextVis}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet nihil iure alias quae? Distinctio animi natus debitis est minima quos deleniti ea, incidunt, 
            molestias neque alias eaque quis soluta tempora.</p>
          <button className={visibleImg.img2 ? styled.visBtn : styled.unVisBtn}>Read more</button>
        </div>
        </Link>
        <div className={styled.card} onMouseEnter={handleUnVisible3}
          onMouseLeave={handleVisible3}>
          <h4 className={visibleImg.img3 ? "" : styled.texth4}>Buying phone parts</h4>
          <img src={imgRepair} alt=""  className={visibleImg.img3 ? styled.visImg : styled.unVisImg} width="100%" />
          <p className={visibleImg.img3 ? styled.contentText : styled.contentTextVis}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet nihil iure alias quae? Distinctio animi natus debitis est minima quos deleniti ea, incidunt, 
            molestias neque alias eaque quis soluta tempora.</p>
          <button className={visibleImg.img3 ? styled.visBtn : styled.unVisBtn}>Read more</button>
        </div>

        <div className={styled.card} onMouseEnter={handleUnVisible4}
          onMouseLeave={handleVisible4}>
          <h4 className={visibleImg.img4 ? "" : styled.texth4}>Support</h4>
          <img src={imgRepair} alt="" className={visibleImg.img4 ? styled.visImg : styled.unVisImg} width="100%" />
          <p className={visibleImg.img4 ? styled.contentText : styled.contentTextVis}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet nihil iure alias quae? Distinctio animi natus debitis est minima quos deleniti ea, incidunt, 
            molestias neque alias eaque quis soluta tempora.</p>
          <button className={visibleImg.img4 ? styled.visBtn : styled.unVisBtn}>Read more</button>
        </div>

      </div>
    </div>
  );
}
