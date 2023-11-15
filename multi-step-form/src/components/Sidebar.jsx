import Styles from "./Sidebar.module.css"

const Sidebar = ({step}) => {
  return (
    <div  className={Styles.sidebarContainer}>

        <div className={Styles.stepContainer}>
          <div className={step === "step1" ? Styles.currentStep : Styles.step}>
            1
          </div>
          <p>Step 1<br />
            <span>Your info</span>
          </p>
        </div>

        <div className={Styles.stepContainer}>
          <div className={step === "step2" ? Styles.currentStep : Styles.step}>
            2
          </div>
          <p>Step 2<br />
            <span>Select plan</span>
          </p>
        </div>

        <div className={Styles.stepContainer}>
          <div className={step === "step3" ? Styles.currentStep : Styles.step}>
            3
          </div>
          <p>Step 3<br />
            <span>Add-ons</span>
          </p>
        </div>

        <div className={Styles.stepContainer}>
          <div className={step === "step4" ? Styles.currentStep : Styles.step}>
            4
          </div>
          <p>Step 4<br />
            <span>Summary</span>
          </p>
        </div>

    </div>
  )
}

export default Sidebar;


// <!-- Sidebar start -->

// Step 1
// Your info

// Step 2
// Select plan

// Step 3
// Add-ons

// Step 4
// Summary

// <!-- Sidebar end -->