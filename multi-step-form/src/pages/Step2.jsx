// react
import { useRef, useContext } from 'react';
import { Link } from "react-router-dom";

// estilos
import styles from "./Step2.module.css";

//components
import Sidebar from "../components/Sidebar";

// imagens
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

//context
import { PlanContext } from '../context/PlanContext';


const Step2 = () => {

  const { plan, setPlan, planPeriod, setPlanPeriod, setOnlineService, setLargeStorage, setCustomizableProfile } = useContext(PlanContext);

  //INICIO DAS CONFIGURAÇÕES DO PERIODO DO PLANO
  const inputCheckbox = useRef();
  const monthlyDisplay = useRef();
  const yearlyDisplay = useRef();

  const changePlanPeriod = () => {
    if (inputCheckbox.current.checked) {
      setPlanPeriod("Yearly");
      setPlan((prev) => ({ name: prev.name, price: prev.price * 10 }));
      monthlyDisplay.current.classList.add("disable");
      yearlyDisplay.current.classList.add("active");

      setOnlineService({ active: false, value: 10 });
      setLargeStorage({ active: false, value: 20 });
      setCustomizableProfile({ active: false, value: 20 });
    } else {
      setPlanPeriod("Monthly");
      setPlan((prev) => ({ name: prev.name, price: prev.price / 10 }));
      monthlyDisplay.current.classList.add("active");
      yearlyDisplay.current.classList.add("disable");

      setOnlineService({ active: false, value: 1 });
      setLargeStorage({ active: false, value: 2 });
      setCustomizableProfile({ active: false, value: 2 });
    };
  };
  //FIM DAS CONFIGURAÇÕES DO PERIDO DO PLANO

  return (
    <section className="appContainer">
      <div className="sidebarContainer">
        <Sidebar step={"step2"} />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">

          <h1 className="title">Select your plan</h1>
          <p className="stepDescription">You have the option of monthly or yearly billing.</p>

          <div className={styles.planContainer}>

            <button className={plan.name === "Arcade" ? styles.planCardActived : styles.plansCards} onClick={() => setPlan({ name: "Arcade", price: (planPeriod === "Monthly" ? 9 : 90) })} >
              <div>
                <img src={arcadeIcon} alt="arcade" />
              </div>
              <div className={styles.planPriceContainer}>
                <span className={styles.planName}>Arcade</span><br />
                <span className={styles.planPrice}>{planPeriod === "Monthly" ? `+$9/mo` : `$90/yr`}</span><br />
                <span className={planPeriod === "Yearly" ? styles.freeMonths : styles.hide}>2 months free</span>
              </div>
            </button>

            <button className={plan.name === "Advanced" ? styles.planCardActived : styles.plansCards} onClick={() => setPlan({ name: "Advanced", price: (planPeriod === "Monthly" ? 12 : 120) })} >
              <div>
                <img src={advancedIcon} alt="advanced" />
              </div>
              <div className={styles.planPriceContainer}>
                <span className={styles.planName}>Advanced</span><br />
                <span className={styles.planPrice}>{planPeriod === "Monthly" ? `+$12/mo` : `$120/yr`}</span><br />
                <span className={planPeriod === "Yearly" ? styles.freeMonths : styles.hide}>2 months free</span>
              </div>
            </button>

            <button className={plan.name === "Pro" ? styles.planCardActived : styles.plansCards} onClick={() => setPlan({ name: "Pro", price: (planPeriod === "Monthly" ? 15 : 150) })} >
              <div>
                <img src={proIcon} alt="pro" />
              </div>
              <div className={styles.planPriceContainer}>
                <span className={styles.planName}>Pro</span><br />
                <span className={styles.planPrice}>{planPeriod === "Monthly" ? `+$15/mo` : `$150/yr`}</span><br />
                <span className={planPeriod === "Yearly" ? styles.freeMonths : styles.hide}>2 months free</span>
              </div>
            </button>

          </div>

          <div className={styles.planPeriodContainer}>
            <span className={planPeriod === "Monthly" ? styles.active : styles.disable} ref={monthlyDisplay}>Monthly</span>

            {/* inicio button */}
            <div className={styles.buttonContainer}>
              <label>
                <input type="checkbox" className={styles.toggleInput} onChange={changePlanPeriod} ref={inputCheckbox} checked={(planPeriod === "Yearly") ? true : false} />
                <div className={styles.slider}>
                  <button className={styles.button}>

                  </button>
                </div>
              </label>
            </div>
            {/* fim button */}

            <span className={planPeriod === "Yearly" ? styles.active : styles.disable} ref={yearlyDisplay}>Yearly</span>
          </div>

        </div>
        <nav className="navigationContainer">
          <Link className="link" to={'/'}><span className="backBtn">Go Back</span></Link>
          <Link className="link" to={'/step3'}><button className="nextBtn">Next Step</button></Link>
        </nav>
      </div>

    </section>
  );
};

export default Step2;