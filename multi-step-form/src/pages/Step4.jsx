// react
import { useContext } from 'react';
import { Link } from "react-router-dom";

// estilos
import styles from "./Step4.module.css";

// components
import Sidebar from "../components/Sidebar";

// context
import { PlanContext } from '../context/PlanContext';

// axios
import axios from 'axios';

// router
import { useNavigate } from 'react-router-dom';

const Step4 = () => {

  const {name, email, phone, plan, planPeriod, onlineService, largeStorage, customizableProfile, totalValue } = useContext(PlanContext);

  const navigate = useNavigate();

  function handleSubmit() {

    const data = {
      name: name,
      email: email,
      phone: phone,
      plan: plan.name,
      planPeriod: planPeriod,
      onlineService: onlineService.active.toString(), 
      largeStorage: largeStorage.active.toString(),
      customizableProfile: customizableProfile.active.toString()
    }

    axios.post("http://localhost/form_copia/index.php", data).then(function (response) {

      if (response.data.status) {
        navigate("/thanks");
      } else {
        console.log("Failed to create record.");
      }

    });
  
  }

  return (
    <section className="appContainer">
      <div className="sidebarContainer">
        <Sidebar step={"step4"} />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">

          <h1 className="title">Finishing up</h1>
          <p className="stepDescription">Double-check everything looks OK before confirming.</p>

          <div className={styles.servicesListContainer}>

            <div>
              <div className={styles.planContainer}>
                <p>
                  {plan.name} ({planPeriod})<br />
                  <Link className={styles.changeLink} to={'/step2'}>Change</Link>
                </p>
                <span>
                  {planPeriod === "Monthly" ? `$${plan.price}/mo` : `$${plan.price}/yr`}
                </span>
              </div>
            </div>

            <div className={styles.addOnItem} style={onlineService.active ? { display: "flex" } : { display: "none" }}>
              <span className={styles.addOnName}>Online service</span>
              <span className={styles.addOnPrice}>{planPeriod === "Monthly" ? `+$${onlineService.value}/mo` : `$${onlineService.value}/yr`}</span>
            </div>

            <div className={styles.addOnItem} style={largeStorage.active ? { display: "flex" } : { display: "none" }}>
              <span className={styles.addOnName}>Large storage</span>
              <span className={styles.addOnPrice}>{planPeriod === "Monthly" ? `+$${largeStorage.value}/mo` : `$${largeStorage.value}/yr`}</span>
            </div>

            <div className={styles.addOnItem} style={customizableProfile.active ? { display: "flex" } : { display: "none" }}>
              <span className={styles.addOnName}>Customizable profile</span>
              <span className={styles.addOnPrice}>{planPeriod === "Monthly" ? `+$${customizableProfile.value}/mo` : `$${customizableProfile.value}/yr`}</span>
            </div>

          </div>

          <div className={styles.totalValueContainer}>
            <span className={styles.addOnName}>Total ({planPeriod === "Monthly" ? "per month" : "per year"})</span>
            <span className={styles.totalValue}>{planPeriod === "Monthly" ? `+$${totalValue}/mo` : `$${totalValue}/yr`}</span>
          </div>

        </div>
        <nav className="navigationContainer">
          <Link className="link" to={'/step3'}><span className="backBtn">Go Back</span></Link>
          <input onClick={() => handleSubmit()} className="confirmBtn" type='submit' value={"Confirm"} />          
        </nav>
      </div>

    </section>
  );
};

export default Step4;