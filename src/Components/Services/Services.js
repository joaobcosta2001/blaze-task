import './Services.css';
import lens_image from "../../assets/images/magnifying-glass-2.png"
import meeting_image from "../../assets/images/meeting-image.png"
import gears_image from "../../assets/images/gears-image.png"
import results_image from "../../assets/images/results-image.png"
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Services() {

    const {t} = useTranslation()

    useEffect(() => {
        const progressBar1 = document.getElementById("services-progress-bar-1");
        const progressBar2 = document.getElementById("services-progress-bar-2");
        const progressBar3 = document.getElementById("services-progress-bar-3");
        const progressBar4 = document.getElementById("services-progress-bar-4");
        if (progressBar1 == null || progressBar2 == null || progressBar3 == null || progressBar4 == null){
            return;
        }
        progressBar1.style.height = "0px";
        progressBar2.style.height = "0px";
        progressBar3.style.height = "0px";
        progressBar4.style.height = "0px";
        const updateProgressBar = () => {

            if (progressBar1  && (window.scrollY) < 450) {
                progressBar1.style.height = `${2000 * (window.scrollY / (document.body.scrollHeight-580))+50}px`;
            }else{
                console.log("updating")
                progressBar1.style.height = "500px";
            }

            if (progressBar2 && (window.scrollY-500) > -50 && (window.scrollY-500) < 450) {
                progressBar2.style.height = `${2000 * ((window.scrollY-500) / (document.body.scrollHeight-580))+50}px`;
            }else if((window.scrollY-500) >= 450){
                progressBar2.style.height = "500px";
            }else{
                progressBar2.style.height = "0px";
            }

            if (progressBar3 && (window.scrollY-1000) > -50  && (window.scrollY-1000) < 450) {
                progressBar3.style.height = `${2000 * ((window.scrollY-1000) / (document.body.scrollHeight-580))+50}px`;
            }else if((window.scrollY-1000) >= 450){
                progressBar3.style.height = "500px";
            }else{
                progressBar3.style.height = "0px";
            }

            if (progressBar4 && (window.scrollY-1500) > -50 && (window.scrollY-1500) < 450) {
                progressBar4.style.height = `${2000 * ((window.scrollY-1500) / (document.body.scrollHeight-580))+50}px`;
            }else if((window.scrollY-1500) >= 450){
                progressBar4.style.height = "500px";
            }else{
                progressBar4.style.height = "0px";
            }
        
            // Schedule the next update on the next animation frame
            requestAnimationFrame(updateProgressBar);
        };
    
        // Initial call to start the animation loop
        updateProgressBar();
    
        // Cleanup any resources or subscriptions when the component unmounts
        return () => {
        // You might want to cancel the animation frame when unmounting
            cancelAnimationFrame(updateProgressBar);
        };
    }, []);

    return(
        <div>
        {!isMobile?(
            <div id="services-page">
                <div id="services-title-div">
                    <div id="services-title">
                        {t("process_title")}
                    </div>
                    <div id="services-title-bar"/>
                </div>


                <div className='services-step-div blazetask-fade-background'>
                    <div id="services-progress-bar-1" className='services-progress-bar service-progress-bar-white'/>
                    <div className='services-progress-dot-white'/>
                    <div className='services-step-contents'>
                        <div>

                            <div className='services-step-number'>
                                1.
                            </div>
                            <div className='services-step-title'>
                                {t("process_section_title_1")}
                            </div>
                            <div className='services-step-description'>
                                {t("process_section_description_1")}
                            </div>
                        </div>
                        <img src={lens_image} className='services-step-image services-step-image-right' alt="Step 1"/>
                    </div>
                </div>
                
                <div className='services-step-div light-gray-background'>
                    <div id="services-progress-bar-2" className='services-progress-bar service-progress-bar-orange'/>
                    <div className='services-progress-dot-orange'/>
                    <div className='services-step-contents'>
                        <div>
                            <div className='services-step-number'>
                                2.
                            </div>
                            <div className='services-step-title'>
                                {t("process_section_title_2")}
                            </div>
                            <div className='services-step-description'>
                                {t("process_section_description_2")}
                            </div>
                        </div>
                        <img src={meeting_image} className='services-step-image services-step-image-right' alt="Step 1"/>
                    </div>
                </div>
                <div className='services-step-div blazetask-fade-background'>
                    <div id="services-progress-bar-3" className='services-progress-bar service-progress-bar-white'/>
                    <div className='services-progress-dot-white'/>
                    <div className='services-step-contents'>
                        <div>
                            <div className='services-step-number'>
                                3.
                            </div>
                            <div className='services-step-title'>
                                {t("process_section_title_3")}
                            </div>
                            <div className='services-step-description'>
                                {t("process_section_description_3")}
                            </div>
                        </div>
                        <img src={gears_image} className='services-step-image services-step-image-right' alt="Step 1"/>
                    </div>
                </div>
                
                <div className='services-step-div light-gray-background'>
                    <div id="services-progress-bar-4" className='services-progress-bar service-progress-bar-orange'/>
                    <div className='services-progress-dot-orange'/>
                    <div className='services-step-contents'>
                        <div>
                            <div className='services-step-number'>
                                4.
                            </div>
                            <div className='services-step-title'>
                                {t("process_section_title_4")}
                            </div>
                            <div className='services-step-description'>
                                {t("process_section_description_4")}
                            </div>
                        </div>
                        <img src={results_image} className='services-step-image services-step-image-right' alt="Step 1"/>
                    </div>
                </div>
                

            </div>
        ):(
            <div id="services-page-mobile">
                <div id="services-title-div-mobile">
                    <div id="services-title-mobile">
                       {t("process_title_mobile")}
                    </div>
                    <div id="services-title-bar-mobile"/>
                </div>
                <div className='services-step-div-mobile blazetask-fade-background'>
                    <div className='services-step-contents-mobile'>
                        <img className='services-step-image-mobile' src={lens_image} alt="Step 1"/>
                        <div>
                            <div className='services-step-number-mobile'>
                                1.
                            </div>
                            <div className='services-step-title-mobile'>
                                {t("process_section_title_1")}
                            </div>
                            <div className='services-step-description-mobile'>
                                {t("process_section_description_1")}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='services-step-div-mobile light-gray-background'>
                    <div className='services-step-contents-mobile'>
                        <img className='services-step-image-mobile' src={meeting_image}  alt="Step 2"/>
                        <div>
                            <div className='services-step-number-mobile'>
                                2.
                            </div>
                            <div className='services-step-title-mobile'>
                                {t("process_section_title_2")}
                            </div>
                            <div className='services-step-description-mobile'>
                                {t("process_section_description_2")}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='services-step-div-mobile blazetask-fade-background'>
                    <div className='services-step-contents-mobile'>
                        <img className='services-step-image-mobile' src={gears_image}  alt="Step 3"/>
                        <div>
                            <div className='services-step-number-mobile'>
                                3.
                            </div>
                            <div className='services-step-title-mobile'>
                                {t("process_section_title_3")}
                            </div>
                            <div className='services-step-description-mobile'>
                                {t("process_section_description_3")}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='services-step-div-mobile light-gray-background'>
                    <div className='services-step-contents-mobile'>
                        <img className='services-step-image-mobile' src={results_image}  alt="Step 4"/>
                        <div>
                            <div className='services-step-number'>
                                4.
                            </div>
                            <div className='services-step-title-mobile'>
                                {t("process_section_title_1")}
                            </div>
                            <div className='services-step-description-mobile'>
                                {t("process_section_description_4")}
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
    )}
    </div>
    )
}

export default Services;