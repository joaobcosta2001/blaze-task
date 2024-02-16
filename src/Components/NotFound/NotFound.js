
import { useTranslation } from "react-i18next";
import "./NotFound.css"
import { isMobile } from "react-device-detect";
import page_not_found from "../../assets/images/page_not_found.png"

function NotFound(){

    const {t} = useTranslation()

    return(
        <div>
            {!isMobile?(
            <div id="not-found-div">
                <img id="page-not-found-image" src={page_not_found} alt="Page not found"/>
                <div id="page-not-found-text">
                    {t("page_not_found")}
                </div>
            </div>
            ):(
            <div id="not-found-div-mobile">
                <img id="page_not_found_image_mobile" src={page_not_found} alt="Page not found"/>
                <div id="page_not_found_text_mobile">
                    {t("page_not_found")}
                </div>
            </div>
            )}
        </div>
    )
}

export default NotFound