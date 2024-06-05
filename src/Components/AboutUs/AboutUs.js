import './AboutUs.css';
import { isMobile } from 'react-device-detect';
import joao_costa from '../../assets/images/joao-costa.jpeg'
import diogo_cordeiro from '../../assets/images/diogo-cordeiro.jpg'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

function AboutUs() {

    const {t} = useTranslation()
    ReactGA.send({ hitType: "pageview", page: "/process", title: "Visited Process" });

    return(
        <div>
        <Helmet>
            <link rel="canonical" href="https://www.blazetask.com/services" />
        </Helmet>
        {!isMobile?(
            <div id="about-us-page">
                <div id="about-us-main-div">
                    <div id="about-us-right-div">

                    </div>
                    <div id="about-us-title">
                        {t("ABOUT")}<br/>{t("US")}
                    </div>
                    <div id="about-us-description">
                        {t("about_us_description")}
                    </div>
                    <div id="about-us-left-red-div">

                    </div>
                </div>
                <div id="about-us-step-into-blazetask-main-div">
                    <div id="about-us-step-into-blazetask-step-into">
                        STEP<br/>INTO
                    </div>
                    <div id="about-us-step-into-blazetask-value-caroussel">
                        <div className="about-us-step-into-blazetask-value-caroussel-part">
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("automation")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("inovation")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("future")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("profitability")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("efficiency")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("creativity")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                        </div>
                        <div className="about-us-step-into-blazetask-value-caroussel-part">
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("automation")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("inovation")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("future")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("profitability")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("efficiency")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                            <div className="about-us-step-into-blazetask-value-item">
                                {t("creativity")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots'/>
                        </div>
                    </div>
                    <div id="about-us-step-into-blazetask-blazetask">
                        BLAZETASK
                    </div>
                </div>
                <div id="about-us-partner-main-div">
                    <div className='about-us-partner-div'>
                        <img className='about-us-partner-photo' alt="Diogo Cordeiro" src={diogo_cordeiro}/>
                        <div className='about-us-partner-name'>
                            DIOGO<br/>CORDEIRO
                        </div>
                        <div className='about-us-partner-position'>
                            {t("CEO")}
                        </div>
                        <div className='about-us-partner-description'>
                            {t("diogo_description")}
                        </div>
                        <a href='https://www.linkedin.com/in/diogocordeiro-feup/' target='_blank' rel='noreferrer'><div className='about-us-partner-linkedin-button'/></a>
                        <div className='about-us-partner-bar'/>
                    </div>
                    
                    <div className='about-us-partner-div'>
                        <img className='about-us-partner-photo' alt="Joao Costa" src={joao_costa}/>
                        <div className='about-us-partner-name'>
                            JOÃO<br/>COSTA
                        </div>
                        <div className='about-us-partner-position'>
                            {t("CTO")}
                        </div>
                        <div className='about-us-partner-description'>
                            {t("joao_description")}
                        </div>
                        <a href='https://www.linkedin.com/in/joaobcosta2001/' target='_blank' rel='noreferrer'><div className='about-us-partner-linkedin-button'/></a>
                        <div className='about-us-partner-bar'/>
                    </div>
                </div>
            </div>
        ):(
            <div id="about-us-page-mobile">
                <div id="about-us-main-div-mobile">
                    <div id="about-us-title-mobile">
                        {t("ABOUT")}<br/>{t("US")}
                    </div>
                    <div id="about-us-description-mobile">
                        {t("about_us_description")}
                    </div>
                </div>
                <div id="about-us-step-into-blazetask-main-div">
                    <div id="about-us-step-into-blazetask-step-into-mobile">
                        STEP<br/>INTO
                    </div>
                    <div id="about-us-step-into-blazetask-value-caroussel-mobile">
                        <div className="about-us-step-into-blazetask-value-caroussel-part">
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("automation")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("inovation")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("future")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("profitability")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("efficiency")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("creativity")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                        </div>
                        <div className="about-us-step-into-blazetask-value-caroussel-part">
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("automation")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("inovation")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("future")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("profitability")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("efficiency")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                            <div className="about-us-step-into-blazetask-value-item-mobile">
                                {t("creativity")}
                            </div>
                            <div className='about-us-step-into-blazetask-dots-mobile'/>
                        </div>
                    </div>
                    <div id="about-us-step-into-blazetask-blazetask-mobile">
                        BLAZETASK
                    </div>
                </div>
                <div id="about-us-partner-main-div-mobile">
                    <div id="about-us-partners-title">
                        {t("about_us_partners")}
                    </div>
                    <div className='about-us-partner-div-mobile'>
                        <div className="about-us-partner-photo-background">
                            <img className='about-us-partner-photo-mobile' alt="Diogo Cordeiro" src={diogo_cordeiro}/>
                        </div>
                        <div className='about-us-partner-name-mobile'>
                            DIOGO<br/>CORDEIRO
                        </div>
                        <div className='about-us-partner-position-mobile'>
                            {t("CEO")}
                            <a href='https://www.linkedin.com/in/diogocordeiro-feup/' target='_blank' rel='noreferrer'><div className='about-us-partner-linkedin-button-mobile'/></a>
                        </div>
                        <div className='about-us-partner-description-mobile'>
                            {t("diogo_description")}
                        </div>
                        <div className='about-us-partner-bar-mobile'/>
                    </div>
                    
                    <div className='about-us-partner-div-mobile'>
                        <div className="about-us-partner-photo-background">
                            <img className='about-us-partner-photo-mobile' alt="Joao Costa" src={joao_costa}/>
                        </div>
                        <div className='about-us-partner-name-mobile'>
                            JOÃO<br/>COSTA
                        </div>
                        <div className='about-us-partner-position-mobile'>
                            {t("CTO")}
                            <a href='https://www.linkedin.com/in/joaobcosta2001/' target='_blank' rel='noreferrer'><div className='about-us-partner-linkedin-button-mobile'/></a>
                        </div>
                        <div className='about-us-partner-description-mobile'>
                            {t("joao_description")}
                        </div>
                        <div className='about-us-partner-bar-mobile'/>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default AboutUs;