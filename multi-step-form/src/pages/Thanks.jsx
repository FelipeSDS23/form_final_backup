// estilos
import styles from "./Thanks.module.css";

//components
import Sidebar from "../components/Sidebar";

// imagens
import finishIcon from "../assets/images/icon-thank-you.svg";

const Thanks = () => {
  return (
    <section className="appContainer">
      <div className="sidebarContainer">
        <Sidebar step={"step4"} />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">

          <div className={styles.thanksMassageContainer}>
            <div>
              <img src={finishIcon} alt="Finish icon" />
              <h2 className="title">Thank you!</h2>
              <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Thanks;