// react
import { useRef, useContext } from 'react';
import { Link } from "react-router-dom";

// estilos
import styles from "./Step1.module.css";

//components
import Sidebar from "../components/Sidebar";

//context
import { PlanContext } from '../context/PlanContext';


const Step1 = () => {

  const { name, setName, email, setEmail, phone, setPhone } = useContext(PlanContext);

  // CONFIGURAÇÕES DE ERRO DE PREENCHIMENTO
  const nameErrorMsg = useRef();
  const emailErrorMsg = useRef();
  const invalidEmailMsg = useRef();
  const phoneErrorMsg = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


  const showHideErrorMsg = () => {
    if (!name) {
      nameErrorMsg.current.style.display = "block";
      nameInput.current.style.border = "1px solid var(--Strawberry-red)";
    } else {
      nameErrorMsg.current.style.display = "none";
      nameInput.current.style.border = "1px solid var(--Light-gray)";
    }
    if (!email) {
      emailErrorMsg.current.style.display = "block";
      invalidEmailMsg.current.style.display = "none";
      emailInput.current.style.border = "1px solid var(--Strawberry-red)";
    } else {
      emailErrorMsg.current.style.display = "none";
      emailInput.current.style.border = "1px solid var(--Light-gray)";
      if (!emailRegex.test(email)) {
        emailInput.current.style.border = "1px solid var(--Strawberry-red)";
        invalidEmailMsg.current.style.display = "block";
      } else {
        invalidEmailMsg.current.style.display = "none";
        emailInput.current.style.border = "1px solid var(--Light-gray)";
      }
    }
    if (!phone) {
      phoneErrorMsg.current.style.display = "block";
      phoneInput.current.style.border = "1px solid var(--Strawberry-red)";
    } else {
      phoneErrorMsg.current.style.display = "none";
      phoneInput.current.style.border = "1px solid var(--Light-gray)";
    }
  }
  // FIM DAS CONFIGURAÇÕES DE ERRO DE PREENCHIMENTO

  return (
    <section className="appContainer">
      <div className="sidebarContainer">
        <Sidebar step={"step1"}/>
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">

          <h1 className="title">Personal info</h1>
          <p className="stepDescription">Please provide your name, email address, and phone number.</p>

          <form>

            <div className={styles.labelInputContainer}>
              <label className={styles.label}>
                <div className={styles.labelErrorContainer}>
                  <span>Name</span>
                  <span className={styles.errorMsg} ref={nameErrorMsg}>This field is required</span>
                </div>
                <input className={styles.input} ref={nameInput} type="text" name="name" id="name" placeholder="e.g. Stephen King" onChange={(e) => setName(e.target.value)} value={name} />
              </label>
            </div>

            <div className={styles.labelInputContainer}>
              <label className={styles.label}>
                <div className={styles.labelErrorContainer}>
                  <span>Email Address</span>
                  <span className={styles.errorMsg} ref={invalidEmailMsg}>Invalid email</span>
                  <span className={styles.errorMsg} ref={emailErrorMsg}>This field is required</span>
                </div>
                <input className={styles.input} ref={emailInput} type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" onChange={(e) => setEmail(e.target.value)} value={email} />
              </label>
            </div>

            <div className={styles.labelInputContainer}>
              <label className={styles.label}>
                <div className={styles.labelErrorContainer}>
                  <span>Phone Number</span>
                  <span className={styles.errorMsg} ref={phoneErrorMsg}>This field is required</span>
                </div>
                <input className={styles.input} ref={phoneInput} type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" onChange={(e) => setPhone(e.target.value)} value={phone} />
              </label>
            </div>

          </form>

        </div>
        <nav className="navigationContainer">
          <div></div>
          <Link onClick={showHideErrorMsg} className="link" to={(name && email && phone && emailRegex.test(email)) ? '/step2' : '/'}><button className="nextBtn">Next Step</button></Link>
        </nav>
      </div>

    </section>
  );
};

export default Step1;