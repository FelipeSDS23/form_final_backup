import { createContext, useState } from "react";

export const PlanContext = createContext();

export const PlanContextProvider = ({ children }) => {

    //INICIO STEP 1 DADOS
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    //FIM STEP 1 DADOS

    //INICIO STEP 2 DADOS
    const [plan, setPlan] = useState({ name: "Arcade", price: 9 });
    const [planPeriod, setPlanPeriod] = useState("Monthly");
    //FIM STEP 2 DADOS

    //INICIO STEP 3 DADOS
    const [onlineService, setOnlineService] = useState({ active: false, value: 1 });
    const [largeStorage, setLargeStorage] = useState({ active: false, value: 2 });
    const [customizableProfile, setCustomizableProfile] = useState({ active: false, value: 2 });
    const [totalValue, setTotalValue] = useState(0)
    //FIM STEP 3 DADOS

    return (
        <PlanContext.Provider value={{
            name, setName, email, setEmail, phone, setPhone,
            plan, setPlan, planPeriod, setPlanPeriod,
            onlineService, setOnlineService,
            largeStorage, setLargeStorage,
            customizableProfile, setCustomizableProfile,
            totalValue, setTotalValue
        }}>
            {children}
        </PlanContext.Provider>
    );
};