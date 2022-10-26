import { useTranslation } from "react-i18next";

function Text(){
    const {t}= useTranslation(); 
    return(
        <div>
             <p>{t("text")}</p>
        </div>
       
    )
}

export default Text