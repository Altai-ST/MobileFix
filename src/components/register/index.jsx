import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "./register.module.scss";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { addUsers, fetchUser } from "../../store/reducers/UserSlice";

export default function Register() {


  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState(false);
  const [submits, setSubmits] = useState(true);

  const [passwordError, setPasswordError] = useState("");

  const [fio, setFio] = useState({
    name: "",
    lastname: "",
    fathername: "",
    repeatPassword: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [btnValid, setBtnValid] = useState(false);

  const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");

  const handleChange = (val) => {
    const values = val.target.value;
    switch (val.target.name) {
      case "name":
        setFio({ ...fio, name: values });
        break;
      case "lastname":
        setFio({ ...fio, lastname: values });
        break;
      case "fathername":
        setFio({ ...fio, fathername: values });
        break;
      case "email":
        if (
          values.match(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
          )
        ) {
          setEmailError(false);
          setFormData({ ...formData, email: values });
        } else {
          setEmailError(true);
          setFormData({ ...formData, email: values });
        }
        break;
      case "number":
        setFormData({ ...formData, number: values });
        break;
      case "password":
        if (regexPassword.test(values)) {
          setPasswordError(false);
          setFormData({ ...formData, password: values });
        } else {
          setPasswordError(true);
          setFormData({ ...formData, password: values });
        }
        break;
      case "password_confirmation":
        setFio({ ...fio, repeatPassword: values });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setFormData({
      ...formData,
      name: fio.lastname + " " + fio.name + " " + fio.fathername,
    });
    if (
      !emailError &&
      formData.number !== "" &&
      formData.name !== "" &&
      formData.number.length > 11 &&
      fio.repeatPassword === formData.password &&
      !passwordError
    ) {
      setSubmits(false);
    } else {
      setSubmits(true);
    }
  }, [formData, fio]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchUser(formData))
    navigate("/home")
  };

  return (
    <div className={styled.reg}>
      <div className={styled.container}>
        <h1>MobileFix</h1>
        <h2>Registration</h2>
        <form action="" className={styled.forms} onSubmit={handleSubmit}>
          <p>
            Name:<span className={styled.must}>*</span>
          </p>
          <input type="text" name="name" onChange={handleChange} />
          <p>
            LastName:<span className={styled.must}>*</span>
          </p>
          <input type="text" name="lastname" onChange={handleChange} />
          <p>
            FatherName:<span className={styled.must}>*</span>
          </p>
          <input type="text" name="fathername" onChange={handleChange} />
          <p>
            Email:<span className={styled.must}>*</span>
          </p>
          <input type="email" name="email" onChange={handleChange} />
          {emailError && (
            <div style={{ color: "red" }}>Не правильно веден email</div>
          )}
          <p>
            Number Phone:<span className={styled.must}>*</span>
          </p>
          <InputMask
            mask={"0999 999 999"}
            value={formData.number}
            onChange={handleChange}
            type="tel"
            name="number"
          />
          <p>
            Password:<span className={styled.must}>*</span>
          </p>
          <input
            type="password"
            onChange={handleChange}
            value={formData.password}
            name="password"
          />

          {passwordError ? (
            <div style={{ color: "red" }}>Password not valid</div>
          ) : (
            ""
          )}
          <p>
            Repaet password:<span className={styled.must}>*</span>
          </p>
          <input
            type="password"
            onChange={handleChange}
            name="password_confirmation"
            value={fio.repeatPassword}
          />
          {fio.repeatPassword !== formData.password ? (
            <div style={{ color: "red" }}>Password not valid</div>
          ) : (
            ""
          )}
            <button className={styled.logins} disabled={submits} type='submit'>
              Registration
            </button>
          <Link to="/">
            <button className={styled.login}>Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
