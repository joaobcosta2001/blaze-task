import { useTranslation } from "react-i18next";
import "./Contacts.css"
import { useState } from "react";
import { isMobile } from "react-device-detect";

function Contacts(){

    const {t} = useTranslation()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });


    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for form submission here
        console.log('Form submitted:', formData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
                <form onSubmit={handleSubmit} id="contacts-form">
                    <input className="contact-form-input" type="text" name="name" placeholder={t("NAME")} value={formData.firstName} onChange={handleInputChange}/>
                    <br />
                    <input className="contact-form-input" type="text" name="email" placeholder={t("EMAIL")} value={formData.lastName} onChange={handleInputChange}/>
                    <br />
                    <input className="contact-form-input" type="text" name="subject" placeholder={t("SUBJECT")} value={formData.lastName} onChange={handleInputChange}/>
                    <br />
                    <textarea className="contact-form-input contact-form-textarea" name="message" placeholder={t("MESSAGE")} value={formData.lastName} onChange={handleInputChange}/>
                    <br />
                    <button type="submit" id="contacts-form-submit-button">{t("SUBMIT")}</button>
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
                <form onSubmit={handleSubmit} id="contacts-form-mobile">
                    <input className="contact-form-input-mobile" type="text" name="name" placeholder={t("NAME")} value={formData.firstName} onChange={handleInputChange}/>
                    <br />
                    <input className="contact-form-input-mobile" type="text" name="email" placeholder={t("EMAIL")} value={formData.lastName} onChange={handleInputChange}/>
                    <br />
                    <input className="contact-form-input-mobile" type="text" name="subject" placeholder={t("SUBJECT")} value={formData.lastName} onChange={handleInputChange}/>
                    <br />
                    <textarea className="contact-form-input-mobile contact-form-textarea-mobile" name="message" placeholder={t("MESSAGE")} value={formData.lastName} onChange={handleInputChange}/>
                    <br />
                    <button type="submit" id="contacts-form-submit-button-mobile">{t("SUBMIT")}</button>
                </form>
            </div>
            )}
        </div>
    )
}

export default Contacts