// react
import { useContext } from 'react';
import { Link } from "react-router-dom";

// estilos
import styles from "./Step3.module.css";

//components
import Sidebar from "../components/Sidebar";

//font awesome
import { FaCheckSquare } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";

//context
import { PlanContext } from '../context/PlanContext';

const Step3 = () => {

  const {onlineService, setOnlineService, largeStorage, setLargeStorage, customizableProfile, setCustomizableProfile, plan, planPeriod, setTotalValue} = useContext(PlanContext);

  const calcTotalValue = () => {
    setTotalValue(0);
    onlineService.active ? setTotalValue((prev) => prev + onlineService.value): setTotalValue((prev) => prev + 0);
    largeStorage.active ? setTotalValue((prev) => prev + largeStorage.value): setTotalValue((prev) => prev + 0);
    customizableProfile.active ? setTotalValue((prev) => prev + customizableProfile.value): setTotalValue((prev) => prev + 0);
    setTotalValue((prev) => prev + plan.price);
  }

  return (
    <section className="appContainer">
      <div className="sidebarContainer">
        <Sidebar step={"step3"} />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">

          <h1 className="title">Pick add-ons</h1>
          <p className="stepDescription">Add-ons help enhance your gaming experience.</p>

          <div className={styles.addOnsContainer}>

            <label className={onlineService.active ? styles.addOnBtnActived : styles.addOnsBtns} >
              <div className={styles.checkboxParagraphContainer}>
                <input type="checkbox" onChange={() => setOnlineService((prev) => ({active: !prev.active, value: prev.value}))} />
                {onlineService.active ? (<FaCheckSquare className={styles.customCheckbox}/>) : (<FaSquare className={styles.customCheckbox}/>)}
                <p><span className={styles.addOnName}>Online service</span><br />Access to multiplayer games</p>
              </div>
              <span className={styles.addOnPrice}>
                {planPeriod === "Monthly" ? `+$${onlineService.value}/mo` : `$${onlineService.value}/yr`}
              </span>
            </label>

            <label className={largeStorage.active ? styles.addOnBtnActived : styles.addOnsBtns} >
              <div className={styles.checkboxParagraphContainer}>
                <input type="checkbox" onChange={() => setLargeStorage((prev) => ({active: !prev.active, value: prev.value}))} />
                {largeStorage.active ? (<FaCheckSquare className={styles.customCheckbox}/>) : (<FaSquare className={styles.customCheckbox}/>)}
                <p><span className={styles.addOnName}>Larger storage</span><br />Extra 1TB of cloud save</p>
              </div>
              <span className={styles.addOnPrice}>
                {planPeriod === "Monthly" ? `+$${largeStorage.value}/mo` : `$${largeStorage.value}/yr`}
              </span>
            </label>

            <label className={customizableProfile.active ? styles.addOnBtnActived : styles.addOnsBtns} >
              <div className={styles.checkboxParagraphContainer}>
                <input type="checkbox" onChange={() => setCustomizableProfile((prev) => ({active: !prev.active, value: prev.value}))} />
                {customizableProfile.active ? (<FaCheckSquare className={styles.customCheckbox}/>) : (<FaSquare className={styles.customCheckbox}/>)}
                <p><span className={styles.addOnName}>Customizable Profile</span><br />Custom theme on your profile</p>
              </div>
              <span className={styles.addOnPrice}>
                {planPeriod === "Monthly" ? `+$${customizableProfile.value}/mo` : `$${customizableProfile.value}/yr`}
              </span>
            </label>

          </div>

        </div>
        <nav className="navigationContainer">
          <Link className="link" to={'/step2'}><span className="backBtn">Go Back</span></Link>
          <Link className="link" to={'/step4'}><button className="nextBtn" onClick={calcTotalValue}>Next Step</button></Link>
        </nav>
      </div>

    </section>
  );
};

export default Step3;