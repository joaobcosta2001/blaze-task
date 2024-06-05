import { Link } from "react-router-dom";
import "./Homepage.css"
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import {easeOut, motion} from "framer-motion"
import { Helmet } from "react-helmet";
import ReactGA from "../Analytics/analytics";

function Homepage() {
    
    ReactGA.send({ hitType: "pageview", page: "/process", title: "Visited Process" });

    const {t} = useTranslation()
    
    return (
        <div>
        <Helmet>
            <link rel="canonical" href="https://www.blazetask.com/" />
        </Helmet>
        {!isMobile?(
            <div id="homepage">
            
                <div id="homepage-header">
                    <motion.div id="homepage-header-titles" initial={{opacity:0, x:"-10vw"}} whileInView={{opacity:1,x:0}} transition={{delay:0.2, ease:easeOut}}>
                        <div id="homepage-header-title">
                            BlazeTask
                        </div>
                        <div id="homepage-header-subtitle">
                            Automating your future
                        </div>
                        <div id="homepage-header-title-bar"></div>
                    </motion.div>
                </div>
                <div id="homepage-stats-div">
                    <div id="homepage-stats-title">
                        {t("homepage_stats_title")}
                    </div>
                    <div id="homepage-stats-subtitle">
                        {t("homepage_stats_subtitle")}
                    </div>
                    <div id="homepage-stats-list">
                        <motion.div className="homepage-stats-item"  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}}>
                            <div className="homepage-stats-item-image" id="wheel-70-percent">
                                70%
                            </div>
                            <div className="homepage-stats-item-description">
                                {t("homepage_stats_1")}
                            </div>
                        </motion.div>
                        <motion.div className="homepage-stats-item"  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.2}}>
                            <div className="homepage-stats-item-image" id="wheel-27-percent">
                                27%
                            </div>
                            <div className="homepage-stats-item-description">
                                {t("homepage_stats_2")}
                            </div>
                        </motion.div>
                        <motion.div className="homepage-stats-item" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.4}}>
                            <div className="homepage-stats-item-image" id="wheel-95-percent">
                                95%
                            </div>
                            <div className="homepage-stats-item-description">
                                {t("homepage_stats_3")}
                            </div>
                        </motion.div>
                    </div>
                    <div>
                        <a id="homepage-stats-reference" href="https://www.forbes.com/sites/forbescontentmarketing/2022/01/07/research-shows-cxos-plan-to-do-more-good-in-2022/" target="_blank" rel="noreferrer">From a CxO Pulse Survey</a>
                    </div>
                </div>
                <div id="our-process-div">
                    <div id="our-process-polygon"></div>
                    <motion.div id="our-process-intro-div" initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{ease:easeOut}}>
                        <div id="our-process-intro">
                            <div id="our-process-title">
                               {t("homepage_we_are")} <span id="blaze-task-color">BlazeTask</span>. 
                              {t("our_process_title")} <i>{t("efficiency")}</i>.
                            </div>
                            <div id="our-process-description">
                                {t("our_process_description")}
                            </div>
                            <div id="homepage-our-process-bar"></div>
                        </div>
                    </motion.div>
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
                    <div id="homepage-contact-us-image-1" className="homepage-contact-us-image"/>
                    <div id="homepage-contact-description-div">
                        <div id="homepage-contact-description-title">
                            {t("ready_to_get_started")}
                        </div>
                        <div id="homepage-contact-description-text-div">
                            <div id="homepage-contact-description-text">
                                {t("homepage_call_us")}
                            </div>
                            <Link to="/contacts"><button id="homepage-contact-button"><motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{ease:easeOut,duration:0.5}}>{t("ask_for_demo")}&gt;</motion.div></button></Link>

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
                </div>
                <div id="homepage-stats-div-mobile">
                    <div id="homepage-stats-title-mobile">
                        <span id="stay-ahead">{t("homepage_stats_stay_ahead")},</span> {t("homepage_stats_implement_ai")}
                    </div>
                    <div id="homepage-stats-subtitle-mobile">
                        {t("homepage_stats_subtitle")}
                    </div>
                    <div id="homepage-stats-list-mobile">
                        <motion.div className="homepage-stats-item-mobile"  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}}>
                            <div className="homepage-stats-item-image-mobile" id="wheel-70-percent">
                                70%
                            </div>
                            <div className="homepage-stats-item-description-mobile">
                        {t("homepage_stats_1")}
                            </div>
                        </motion.div>
                        <motion.div className="homepage-stats-item-mobile"  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.2}}>
                            <div className="homepage-stats-item-image-mobile" id="wheel-27-percent">
                                27%
                            </div>
                            <div className="homepage-stats-item-description-mobile">
                        {t("homepage_stats_2")}

                            </div>
                        </motion.div>
                        <motion.div className="homepage-stats-item-mobile" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.4}}>
                            <div className="homepage-stats-item-image-mobile" id="wheel-95-percent">
                                95%
                            </div>
                            <div className="homepage-stats-item-description-mobile">
                        {t("homepage_stats_3")}
                            </div>
                        </motion.div>
                    </div>
                    <div>
                        <a id="homepage-stats-reference" href="https://www.forbes.com/sites/forbescontentmarketing/2022/01/07/research-shows-cxos-plan-to-do-more-good-in-2022/">From a CxO Pulse Survey</a>
                    </div>
                </div>
                <div id="our-process-div-mobile">
                    <div id="our-process-polygon-mobile"></div>
                    <motion.div id="our-process-intro-div-mobile" initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{ease:easeOut}}>
                        <div id="our-process-intro-mobile">
                            <div id="our-process-title-mobile">
                               {t("homepage_we_are")} <span id="blaze-task-color">BlazeTask</span>.&nbsp;
                               {t("our_process_title")} <i>{t("efficiency")}</i>.
                            </div>
                            <div id="our-process-description-mobile">
                                {t("our_process_description")}
                            </div>
                            <div id="homepage-our-process-bar-mobile"></div>
                        </div>
                    </motion.div>
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
