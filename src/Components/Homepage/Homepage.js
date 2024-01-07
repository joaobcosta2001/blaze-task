import { Link } from "react-router-dom";
import "./Homepage.css"
import Logo3d from "./Logo3d/Logo3d";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

function Homepage() {

    const {t} = useTranslation()
    
    return (
        <div>
        {!isMobile?(
            <div id="homepage">
            <Logo3d/>
                <div id="homepage-header">
                    <div id="homepage-header-titles">
                        <div id="homepage-header-title">
                            BlazeTask
                        </div>
                        <div id="homepage-header-subtitle">
                            Automating your future
                        </div>
                        <div id="homepage-header-title-bar"></div>
                    </div>
                </div>
                <div id="what-we-are-div">
                    <div id="what-we-are-text-div">
                        <div id="what-we-are-title">
                            {t("homepage_description_title")}
                        </div>
                        <div id="what-we-are-description">
                            {t("homepage_description_text")}
                        </div>
                        <div id="homepage-what-are-we-bar"></div>
                    </div>
                    <div id="what-we-are-image"/>
                </div>
                <div id="our-process-div">
                    <div id="our-process-polygon"></div>
                    <div id="our-process-intro">
                        <div id="our-process-intro-image"/>
                        <div>
                            <div id="our-process-title">
                               {t("our_process_title")} <i>{t("efficiency")}</i>.
                            </div>
                            <div id="our-process-description">
                                {t("our_process_description")}
                            </div>
                            <div id="homepage-our-process-bar"></div>
                        </div>
                    </div>
                    <div id="our-process-list">
                        <div className="our-process-item" id="our-process-item-1">
                            <div className="our-process-icon" id="our-process-icon-1"/>
                            <div className="our-process-item-title">{t("our_process_card_1_title")}</div>
                            <div className="our-process-item-description">{t("our_process_card_1_description")}</div>
                        </div>
                        <div className="our-process-item" id="our-process-item-2">
                            <div className="our-process-icon" id="our-process-icon-2"/>
                            <div className="our-process-item-title">{t("our_process_card_2_title")}</div>
                            <div className="our-process-item-description">{t("our_process_card_2_description")}</div>
                        </div> 
                        <div className="our-process-item" id="our-process-item-3">
                            <div className="our-process-icon"  id="our-process-icon-3"/>
                            <div className="our-process-item-title">{t("our_process_card_3_title")}</div>
                            <div className="our-process-item-description">{t("our_process_card_3_description")}</div>
                        </div> 
                        <div className="our-process-item" id="our-process-item-4">
                            <div className="our-process-icon" id="our-process-icon-4"/>
                            <div className="our-process-item-title">{t("our_process_card_4_title")}</div>
                            <div className="our-process-item-description">{t("our_process_card_4_description")}</div>
                        </div> 
                        <div id="our-process-list-description">
                            <div id="our-process-list-description-title">{t("our_process")}</div>
                            <div id="our-process-list-description-text">{t("our_process_title_description")}</div>
                        </div>
                    </div>
                </div>
                <div id="homepage-contact-us">
                    <div id="homepage-contact-us-images">
                        <div id="homepage-contact-us-image-1" className="homepage-contact-us-image"/>
                        <div id="homepage-contact-us-image-2" className="homepage-contact-us-image"/>
                    </div>
                    <div id="homepage-contact-description-div">
                        <div id="homepage-contact-description-title">
                            {t("ready_to_get_started")}
                        </div>
                        <div id="homepage-contact-description-text-div">
                            <div id="homepage-contact-description-text">
                                {t("homepage_call_us")}
                            </div>
                            <Link to="/contacts"><button id="homepage-contact-button">{t("ask_for_demo")}&gt;</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        ):(
            <div id="homepage-mobile">
                <div id="homepage-header-mobile">
                    <div id="homepage-header-titles">
                        <div id="homepage-header-title-mobile">
                            BlazeTask
                        </div>
                        <div id="homepage-header-subtitle-mobile">
                            Automating your future
                        </div>
                        <div id="homepage-header-title-bar-mobile"></div>
                    </div>
                    <Logo3d/>
                </div>
                <div id="what-we-are-div-mobile">
                    <div id="what-we-are-text-div">
                        <div id="what-we-are-title-mobile">
                            {t("homepage_description_title")}
                        </div>
                        <div id="what-we-are-description-mobile">
                        {t("homepage_description_text")}
                        </div>
                        <div id="homepage-what-are-we-bar"></div>
                    </div>
                </div>
                <div id="our-process-div-mobile">
                    <div id="our-process-polygon-mobile"></div>
                    <div id="our-process-intro-mobile">
                        <div>
                            <div id="our-process-title-mobile">
                                {t("our_process_title")}<i>{t("efficiency")}</i>.
                            </div>
                            <div id="our-process-description-mobile">
                            {t("our_process_description")}
                            </div>
                        </div>
                    </div>
                    <div id="our-process-list-description-mobile">
                            <div id="our-process-list-description-title-mobile">{t("our_process")}</div>
                            <div id="our-process-list-description-text-mobile">{t("our_process_title_description")}</div>
                    </div>
                    <div id="our-process-list-mobile">
                        <div className="our-process-item-mobile">
                            <div className="our-process-icon-mobile" id="our-process-icon-1"/>
                            <div className="our-process-item-title-mobile">{t("our_process_card_1_title")}</div>
                            <div className="our-process-item-description-mobile">{t("our_process_card_1_description")}</div>
                        </div>
                        <div className="our-process-item-mobile">
                            <div className="our-process-icon-mobile" id="our-process-icon-2"/>
                            <div className="our-process-item-title-mobile">{t("our_process_card_2_title")}</div>
                            <div className="our-process-item-description-mobile">{t("our_process_card_2_description")}</div>
                        </div> 
                        <div className="our-process-item-mobile">
                            <div className="our-process-icon-mobile"  id="our-process-icon-3"/>
                            <div className="our-process-item-title-mobile">{t("our_process_card_3_title")}</div>
                            <div className="our-process-item-description-mobile">{t("our_process_card_3_description")}</div>
                        </div> 
                        <div className="our-process-item-mobile">
                            <div className="our-process-icon-mobile" id="our-process-icon-4"/>
                            <div className="our-process-item-title-mobile">{t("our_process_card_4_title")}</div>
                            <div className="our-process-item-description-mobile">{t("our_process_card_4_description")}</div>
                        </div> 
                    </div>
                </div>
                <div id="homepage-contact-us-mobile">
                    <div id="homepage-contact-description-div-mobile">
                        <div id="homepage-contact-description-title-mobile">
                        {t("ready_to_get_started")}
                        </div>
                        <div id="homepage-contact-description-text-div-mobile">
                            <div id="homepage-contact-description-text-mobile">
                            {t("homepage_call_us")}
                            </div>
                            <button id="homepage-contact-button-mobile">{t("ask_for_demo")} &gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
        </div>
    );
}

export default Homepage;
