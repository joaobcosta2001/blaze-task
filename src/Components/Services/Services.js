import './Services.css';
import lens_image from "../../assets/images/magnifying-glass-2.png"
import meeting_image from "../../assets/images/meeting-image.png"
import gears_image from "../../assets/images/gears-image.png"
import results_image from "../../assets/images/results-image.png"
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';

function Services() {

    useEffect(() => {
        const progressBar1 = document.getElementById("services-progress-bar-1");
        const progressBar2 = document.getElementById("services-progress-bar-2");
        const progressBar3 = document.getElementById("services-progress-bar-3");
        const progressBar4 = document.getElementById("services-progress-bar-4");
        progressBar1.style.height = 0;
        progressBar2.style.height = 0;
        progressBar3.style.height = 0;
        progressBar4.style.height = 0;
        const updateProgressBar = () => {
            if (progressBar1  && (window.scrollY) < 500) {
                progressBar1.style.height = `${2000 * (window.scrollY / (document.body.scrollHeight-580))}px`;
            }else{
                progressBar1.style.height = 500;
            }
            if (progressBar2 && (window.scrollY-500) > 0 && (window.scrollY-500) < 500) {
                progressBar2.style.height = `${2000 * ((window.scrollY-500) / (document.body.scrollHeight-580))}px`;
            }else if((window.scrollY-500) >= 500){
                progressBar2.style.height = 500;
            }else{
                progressBar2.style.height = 0
            }
            if (progressBar3 && (window.scrollY-1000) > 0  && (window.scrollY-1000) < 500) {
                progressBar3.style.height = `${2000 * ((window.scrollY-1000) / (document.body.scrollHeight-580))}px`;
            }else if((window.scrollY-1000) >= 500){
                progressBar3.style.height = 500;
                console.log("to much")
            }else{
                progressBar3.style.height = 0
            }
            if (progressBar4 && (window.scrollY-1500) > 0 && (window.scrollY-1500) < 500) {
                progressBar4.style.height = `${2000 * ((window.scrollY-1500) / (document.body.scrollHeight-580))}px`;
            }else if((window.scrollY-1500) >= 500){
                progressBar4.style.height = 500;
            }else{
                progressBar4.style.height = 0
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
                        Our Process
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
                                Understanding Operations
                            </div>
                            <div className='services-step-description'>
                                In this initial phase, we delve deep into your company's operations, conducting thorough consultations and stakeholder interviews. Our goal is to gain a comprehensive understanding of your workflows, identify pain points, and recognize opportunities for streamlining.
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
                                Task Evaluation
                            </div>
                            <div className='services-step-description'>
                                Once we have a clear picture of your operations, we meticulously evaluate tasks based on predefined criteria. We prioritize tasks that are repetitive, time-consuming, and rule-based. Through collaborative discussions, we ensure alignment with your strategic goals, setting the stage for effective automation.
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
                                Implementing Automation
                            </div>
                            <div className='services-step-description'>
                                Armed with insights from the evaluation phase, we seamlessly integrate automation solutions using cutting-edge tools like Zapier and Python programming. Our expert team designs custom scripts and workflows tailored to your specific needs, ensuring a smooth transition into a more efficient and automated work environment.
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
                                Results and Benefits
                            </div>
                            <div className='services-step-description'>
                                The implementation of automation isn't just a process; it's a pathway to tangible results. We continuously monitor and optimize automated workflows, providing you with transparent reports on the realized benefits. Expect increased efficiency, reduced operational costs, and a transformed business landscape that positions you at the forefront of innovation.
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
                        Our Process
                    </div>
                    <div id="services-title-bar-mobile"/>
                </div>
                <div className='services-step-div-mobile blazetask-fade-background'>
                    <div className='services-step-contents-mobile'>
                        <div>
                            <div className='services-step-number-mobile'>
                                1.
                            </div>
                            <div className='services-step-title-mobile'>
                                Understanding Operations
                            </div>
                            <div className='services-step-description-mobile'>
                                In this initial phase, we delve deep into your company's operations, conducting thorough consultations and stakeholder interviews. Our goal is to gain a comprehensive understanding of your workflows, identify pain points, and recognize opportunities for streamlining.
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='services-step-div-mobile light-gray-background'>
                    <div className='services-step-contents-mobile'>
                        <div>
                            <div className='services-step-number-mobile'>
                                2.
                            </div>
                            <div className='services-step-title-mobile'>
                                Task Evaluation
                            </div>
                            <div className='services-step-description-mobile'>
                                Once we have a clear picture of your operations, we meticulously evaluate tasks based on predefined criteria. We prioritize tasks that are repetitive, time-consuming, and rule-based. Through collaborative discussions, we ensure alignment with your strategic goals, setting the stage for effective automation.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='services-step-div-mobile blazetask-fade-background'>
                    <div className='services-step-contents-mobile'>
                        <div>
                            <div className='services-step-number-mobile'>
                                3.
                            </div>
                            <div className='services-step-title-mobile'>
                                Implementing Automation
                            </div>
                            <div className='services-step-description-mobile'>
                                Armed with insights from the evaluation phase, we seamlessly integrate automation solutions using cutting-edge tools like Zapier and Python programming. Our expert team designs custom scripts and workflows tailored to your specific needs, ensuring a smooth transition into a more efficient and automated work environment.
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='services-step-div-mobile light-gray-background'>
                    <div className='services-step-contents-mobile'>
                        <div>
                            <div className='services-step-number'>
                                4.
                            </div>
                            <div className='services-step-title-mobile'>
                                Results and <br/>Benefits
                            </div>
                            <div className='services-step-description-mobile'>
                                The implementation of automation isn't just a process; it's a pathway to tangible results. We continuously monitor and optimize automated workflows, providing you with transparent reports on the realized benefits. Expect increased efficiency, reduced operational costs, and a transformed business landscape that positions you at the forefront of innovation.
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