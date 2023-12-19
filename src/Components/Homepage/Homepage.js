import "./Homepage.css"
import React,{useEffect,useState} from "react";
import Logo3d from "./Logo3d/Logo3d";
import { isMobile } from "react-device-detect";

function Homepage() {

    const [headerIsVisible, setHeaderIsVisible] = useState(false);


    useEffect(()=>{
        setTimeout(()=>{
            setHeaderIsVisible(true);
        },100)
    },[])
    
    return (
        <div>
        {!isMobile?(
            <div id="homepage">
                <div id={headerIsVisible?"homepage-header":"homepage-header-initial"}>
                    <Logo3d/>
                    <div id="homepage-header-titles">
                        <div id="homepage-header-title">
                            BlazeTask
                        </div>
                        <div id="homepage-header-subtitle">
                            Automation with brilliance
                        </div>
                        <div id="homepage-header-title-bar"></div>
                    </div>
                </div>
                <div id="what-we-are-div">
                    <div id="what-we-are-text-div">
                        <div id="what-we-are-title">
                            Your Partner in<br/> Digital Automation
                        </div>
                        <div id="what-we-are-description">
                            We are BlazeTask. We empower your business by automating repetitive, tedious and costly data tasks. Save time, save resources, save money by allowing to transform your business operation!
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
                                We guide your <br/> business  towards the <br/> future of <i>efficiency</i>.
                            </div>
                            <div id="our-process-description">
                                We follow a simple but effective process in order to find ineficient processes within your business and build tools with the latest AI tehcnologies that will help mitigate these problems.
                            </div>
                            <div id="homepage-our-process-bar"></div>
                        </div>
                    </div>
                    <div id="our-process-list">
                        <div className="our-process-item" id="our-process-item-1">
                            <div className="our-process-icon" id="our-process-icon-1"/>
                            <div className="our-process-item-title">Understanding Operations</div>
                            <div className="our-process-item-description">Explore client workflows to find automation opportunities.</div>
                        </div>
                        <div className="our-process-item" id="our-process-item-2">
                            <div className="our-process-icon" id="our-process-icon-2"/>
                            <div className="our-process-item-title">Opportunity Evaluation</div>
                            <div className="our-process-item-description">Strategically choose the most profitable digital enhancements</div>
                        </div> 
                        <div className="our-process-item" id="our-process-item-3">
                            <div className="our-process-icon"  id="our-process-icon-3"/>
                            <div className="our-process-item-title">Implementing Automation</div>
                            <div className="our-process-item-description">Develop applications to automate your tasks.</div>
                        </div> 
                        <div className="our-process-item" id="our-process-item-4">
                            <div className="our-process-icon" id="our-process-icon-4"/>
                            <div className="our-process-item-title">Results and Benefits</div>
                            <div className="our-process-item-description">Deploy, monitor and help you save money and time!</div>
                        </div> 
                        <div id="our-process-list-description">
                            <div id="our-process-list-description-title">Our Process</div>
                            <div id="our-process-list-description-text">How we will renew your business step by step.</div>
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
                            Ready to get<br/>started?
                        </div>
                        <div id="homepage-contact-description-text-div">
                            <div id="homepage-contact-description-text">
                                Call us at 000 000 000 or send us an email at hello@reallygreatsite.com
                            </div>
                            <button id="homepage-contact-button">ASK FOR A DEMO TODAY &gt;</button>
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
                            Automation with brilliance
                        </div>
                        <div id="homepage-header-title-bar-mobile"></div>
                    </div>
                    <Logo3d/>
                </div>
                <div id="what-we-are-div-mobile">
                    <div id="what-we-are-text-div">
                        <div id="what-we-are-title-mobile">
                            Your Partner in Digital Automation
                        </div>
                        <div id="what-we-are-description-mobile">
                            We are BlazeTask. We empower your business by automating repetitive, tedious and costly data tasks. Save time, save resources, save money by allowing to transform your business operation!
                        </div>
                        <div id="homepage-what-are-we-bar"></div>
                    </div>
                </div>
                <div id="our-process-div-mobile">
                    <div id="our-process-polygon-mobile"></div>
                    <div id="our-process-intro-mobile">
                        <div>
                            <div id="our-process-title-mobile">
                                We guide your business  towards the future of <i>efficiency</i>.
                            </div>
                            <div id="our-process-description-mobile">
                                We follow a simple but effective process in order to find ineficient processes within your business and build tools with the latest AI tehcnologies that will help mitigate these problems.
                            </div>
                        </div>
                    </div>
                    <div id="our-process-list-description-mobile">
                            <div id="our-process-list-description-title-mobile">Our Process</div>
                            <div id="our-process-list-description-text-mobile">How we will renew your business step by step.</div>
                    </div>
                    <div id="our-process-list-mobile">
                        <div className="our-process-item-mobile">
                            <div className="our-process-icon-mobile" id="our-process-icon-1"/>
                            <div className="our-process-item-title-mobile">Understanding Operations</div>
                            <div className="our-process-item-description-mobile">Explore client workflows to find automation opportunities.</div>
                        </div>
                        <div className="our-process-item-mobile">
                            <div className="our-process-icon-mobile" id="our-process-icon-2"/>
                            <div className="our-process-item-title-mobile">Opportunity Evaluation</div>
                            <div className="our-process-item-description-mobile">Strategically choose the most profitable digital enhancements</div>
                        </div> 
                        <div className="our-process-item-mobile">
                            <div className="our-process-icon-mobile"  id="our-process-icon-3"/>
                            <div className="our-process-item-title-mobile">Implementing Automation</div>
                            <div className="our-process-item-description-mobile">Develop applications to automate your tasks.</div>
                        </div> 
                        <div className="our-process-item-mobile">
                            <div className="our-process-icon-mobile" id="our-process-icon-4"/>
                            <div className="our-process-item-title-mobile">Results and Benefits</div>
                            <div className="our-process-item-description-mobile">Deploy, monitor and help you save money and time!</div>
                        </div> 
                    </div>
                </div>
                <div id="homepage-contact-us-mobile">
                    <div id="homepage-contact-description-div-mobile">
                        <div id="homepage-contact-description-title-mobile">
                            Ready to get<br/>started?
                        </div>
                        <div id="homepage-contact-description-text-div-mobile">
                            <div id="homepage-contact-description-text-mobile">
                                Call us at 000 000 000 or send us an email at hello@reallygreatsite.com
                            </div>
                            <button id="homepage-contact-button-mobile">ASK FOR A DEMO TODAY &gt;</button>
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
