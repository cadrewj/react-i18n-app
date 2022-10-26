 import { useTranslation } from "react-i18next";

 function Greeting (){
    const {t} = useTranslation()
    return (
        <div>
            <h1>{t("greeting")}</h1>
        </div>
    )
}

export default Greeting;