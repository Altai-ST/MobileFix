import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../../store/reducers/UserSlice";
import styled from "../register/register.module.scss";
export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (val) => {
    switch (val.target.name) {
      case "email":
        setFormData({ ...formData, email: val.target.value });
        break;
      case "password":
        setFormData({ ...formData, password: val.target.value });
        break;
      default:
        break;
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchLogin(formData))
    navigate("/home");
  };

  return (
    <div className={styled.reg}>
      <div className={styled.container}>
        <h1>MobileFix</h1>
        <h2>Sign in</h2>
        <form action=""  className={styled.forms}>
          <p>
            Email:<span className={styled.must}>*</span>
          </p>
          <input type="email" name="email" onChange={handleChange} />
          <p>
            Password:<span className={styled.must}>*</span>
          </p>
          <input type="password" name="password" onChange={handleChange} />
          <button className={styled.logins} type="submit">
            SingIn
          </button>
        </form>
      </div>
    </div>
  );
}
