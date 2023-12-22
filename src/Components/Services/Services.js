import './Services.css';
import step_1_image from "../../assets/images/services-step-1.webp"
//import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

function Services() {

    /*
    const [isMobile,setIsMobile] = useState(true)

    useEffect(()=>{
        if(window.innerWidth < 767){
            setIsMobile(true)
        }
    })
    */

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
                    <div className='services-step-contents'>
                        <img src={step_1_image} className='services-step-image services-step-image-left' alt="Step 1"/>
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
                    </div>
                </div>
                
                <div className='services-step-div light-gray-background'>
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
                        <img src={step_1_image} className='services-step-image services-step-image-right' alt="Step 1"/>
                    </div>
                </div>
                <div className='services-step-div blazetask-fade-background'>
                    <div className='services-step-contents'>
                        <img src={step_1_image} className='services-step-image services-step-image-left' alt="Step 1"/>
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
                    </div>
                </div>
                
                <div className='services-step-div light-gray-background'>
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
                        <img src={step_1_image} className='services-step-image services-step-image-right' alt="Step 1"/>
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