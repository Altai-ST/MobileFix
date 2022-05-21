import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "./navigation.module.scss";
import logo from "../../images/MFD.PNG";
export default function Navigation(props) {
  return (
    <div className={styled.container}>
      <nav>
        <img src={logo} className={styled.logo} alt="" width="5%" height="5%" />
        <Link
          to={
            props.first === "Firmware"
              ? "/home"
              : props.first === "Repair List"
              ? "/worker"
              : props.first === "Make Repair" ? "/repairMan" : '/suplier'
          }
          className={styled.navItem}
        >
          <div className={props.first === "Firmware" ? styled.text : ""}>
            Home
          </div>
        </Link>
        <Link
          to={
            props.first === "Firmware"
              ? "firmware"
              : props.first === "Repair List"
              ? "repairList"
              : props.first === "Make Repair" ? "makerepair" : 'suplierOrder'
          }
          className={styled.navItem}
        >
          <div className={props.first === "Firmware" ? styled.text : ""}>
            {props.first}
          </div>
        </Link>
        <Link
          to={
            props.first === "Firmware"
              ? "repair"
              : props.first === "Repair List"
              ? "replaceList"
              : props.first === "Make Repair" ? "makereplace" : 'suplierDeliver'
          }
          className={styled.navItem}
        >
          <div className={props.first === "Firmware" ? styled.text : ""}>
            {props.third}
          </div>
        </Link>
        <Link
          to={
            props.first === "Firmware"
              ? "checkStatus"
              : props.first === "Repair List"
              ? "serviceList"
              : props.first === "Make Repair" ? "makeservice" : 'suplierDeliverList'
          }
          className={styled.navItem}
        >
          <div className={props.first === "Firmware" ? styled.text : ""}>
            {props.four}
          </div>
        </Link>
        {props.first === "Make Repair" ||
        props.first === "Repair List" ||
        props.first === "Firmware" ? (
          <>
            <Link
              to={
                props.first === "Firmware"
                  ? "replace"
                  : props.first === "Repair List"
                  ? "largestOrder"
                  : "order"
              }
              className={styled.navItem}
            >
              <div className={props.first === "Firmware" ? styled.text : ""}>
                {props.five}
              </div>
            </Link>
          </>
        ) : (
          ""
        )}
        {props.first === "Make Repair" || props.first === "Repair List" ? (
          <Link
            to={props.first === "Repair List" ? "smallestOrder" : "orderList"}
            className={styled.navItem}
          >
            <div>{props.six}</div>
          </Link>
        ) : (
          ""
        )}

        <Link to="/" className={styled.navItem}>
          <div className={props.first === "Firmware" ? styled.text : ""}>
            {props.second}
          </div>
        </Link>
      </nav>
    </div>
  );
}
