import { useTranslation } from "react-i18next";
import "./Contacts.css"
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import i18next from "i18next";
import emailjs from "@emailjs/browser"
import {motion} from "framer-motion"

function Contacts(){

    const {t} = useTranslation()

    const form = useRef();
    const mobile_form = useRef();

    const [form_submitting,set_form_submitting] = useState(false)
    const [confirmation_visible,set_confirmation_visible] = useState(false)
    const confirmation_visibility_time = 2500;

    const sendEmail = (e) => {
        e.preventDefault();

        set_form_submitting(true)

        setTimeout(()=>{
        },1000)


        emailjs
        .sendForm('service_39myl8i', (i18next.language==='pt'?'template_portuguese':'template_english'), (isMobile?form.current:mobile_form.current), {
            publicKey: '7QVZ23b-uv4V1FUf3',
        })
        .then(
            () => {
                console.log("SUCCESS");
                set_form_submitting(false);
                set_confirmation_visible(true);
                setTimeout(()=>{set_confirmation_visible(false)},confirmation_visibility_time)
            },
            (error) => {
                console.log("FAILURE: " + error.text);
                set_form_submitting(false);
                set_confirmation_visible(true);
                setTimeout(()=>{set_confirmation_visible(false)},confirmation_visibility_time)
            },
        );
    };

    return(
        <div>
            {!isMobile?(
            <div id="contacts-div">
                <div id="contacts-description-div">
                    <div id="contacts-description-title">
                        {t("Contacts")}
                    </div>
                    <div id="contacts-description-text">
                        {t("contacts_description")}
                    </div>
                    <div className="contacts-description-contact">
                        {t("contacts_phone")}
                    </div>
                    <div className="contacts-description-contact">
                        {t("contacts_email")}
                    </div>
                    <div id="contacts-color-bar"></div>
                </div>
                <form ref={form} onSubmit={sendEmail} id="contacts-form">
                    <input className="contact-form-input" type="text" name="name" placeholder={t("NAME")} required/>
                    <br />
                    <input className="contact-form-input" type="text" name="email" placeholder={t("EMAIL")} required/>
                    <br />
                    <input className="contact-form-input" type="text" name="subject" placeholder={t("SUBJECT")} required/>
                    <br />
                    <textarea className="contact-form-input contact-form-textarea" name="message" placeholder={t("MESSAGE")} required/>
                    <br />
                    <div id="contact-submit-button-section">
                        <motion.div id="contacts-submit-confirmation" animate={{opacity:(confirmation_visible?1:0)}} transition={{duration:0.2}}>{t("sent")}</motion.div>
                        <button type="submit" id={form_submitting?"contacts-form-submit-button-submitting":"contacts-form-submit-button"}>{t("SUBMIT")}</button>
                    </div>
                </form>
            </div>
            ):(
            <div id="contacts-div-mobile">
                <div id="contacts-description-div-mobile">
                    <div id="contacts-description-title-mobile">
                        {t("Contacts")}
                    </div>
                    <div id="contacts-description-text-mobile">
                        {t("contacts_description_mobile")}
                    </div>
                    <div className="contacts-description-contact-mobile">
                        {t("contacts_phone")}
                    </div>
                    <div className="contacts-description-contact-mobile">
                        {t("contacts_email")}
                    </div>
                    <div id="contacts-color-bar-mobile"></div>
                </div>
                <form ref={mobile_form} onSubmit={sendEmail} id="contacts-form-mobile">
                    <input className="contact-form-input-mobile" type="text" name="name" placeholder={t("NAME")}  required/>
                    <br />
                    <input className="contact-form-input-mobile" type="text" name="email" placeholder={t("EMAIL")} required/>
                    <br />
                    <input className="contact-form-input-mobile" type="text" name="subject" placeholder={t("SUBJECT")} required/>
                    <br />
                    <textarea className="contact-form-input-mobile contact-form-textarea-mobile" name="message" placeholder={t("MESSAGE")} required/>
                    <br />
                    <div id="contact-submit-button-section-mobile">
                        <button type="submit" id={form_submitting?"contacts-form-submit-button-mobile-submitting":"contacts-form-submit-button-mobile"}>{t("SUBMIT")}</button>
                        <motion.div id="contacts-submit-confirmation-mobile" animate={{opacity:(confirmation_visible?1:0)}} transition={{duration:0.2}}>{t("sent")}</motion.div>
                    </div>
                </form>
            </div>
            )}
        </div>
    )
}

export default Contacts