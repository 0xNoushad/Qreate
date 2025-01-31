import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";
import Socials from '../../../../components/socials/Socials';

const MobileContact = ({language, body, name, setName, email, setEmail, message, setMessage, form, formErrors, handleSubmit, budget, handleOptionChange, agreed, setAgreed}) => {
    const { t } = useTranslation();
    return (
        <motion.section className='contact__section' ref={(el) => (body = el)} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} transition={{ duration: 1 }} exit={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 1.5, duration: 1, ease: "easeInOut" } }}>
            <div className='contact section' id='contact'  style={{ height: language === "ar" ? "90vh" : "90vh" }}>
                <div className="let__contact" style={{ paddingTop: language === "ar" ? "2rem" : "4rem" }}>
                    <h1 style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "8rem" : "2rem", textTransform: language === "fr" || language === "en" || language === "de" ? "uppercase" : "lowercase", }}>{t("contact__lets")}</h1>
                </div>
                <div className="contact__container container grid" style={{ flexDirection: language === "ar" ? "column" : "column", display: language === "ar" ? "flex" : "flex",  }}>
                    <div className="contact__content">
                        <div className="contact__details">
                            <h2 style={{ paddingLeft: "1rem", fontFamily: language === "ar" ? "Aref Ruqaa" : "", fontSize: language === "ar" ? "2.7rem" : "1.4rem", textAlign: language === "ar" ? "center" : "left" }}>
                                {t("contact__title1")}
                                {t("contact__title2")}
                                {t("contact__title3")}
                            </h2>
                        </div>
                        <Socials />
                        <div className="contact__info" style={{ justifyContent: language === "ar" ? "center" : "center", flexDirection: language === "ar" ? "row-reverse" : "row", gap: language === "ar" ? "6rem" : "3rem" }}>
                            <div className="contact__email" style={{ textAlign: language === "ar" ? "center" : "center", }}>
                                <h2>{t("contact__getInTouch")}</h2>
                                <p><a href="mailto:Chaudharynoushad46@gmail.com">QreateStudio.com</a></p>
                            </div>
                            <div className="contact__location">
                                <h2>{t("contact__location")}</h2>
                                <p>{t("contact__location-cairo")} {t("contact__location-egypt")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact__content">
                        <form className="contact__form" onSubmit={handleSubmit} ref={form}>
                            <div className="contact__merged">
                                <input type="text" name="name" className={`contact__form-input ${formErrors.name ? "error" : ""}`} placeholder={t("contact__form__insert_name")} value={name} onChange={(e) => setName(e.target.value)} required
                                />
                                {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                                <div className="custom-dropdown">
                                    <select className={`dropdown-select ${formErrors.budget ? "error" : ""}`} name="budget" value={budget} onChange={handleOptionChange} required>
                                        <option value="budget" disabled>
                                            Budget
                                        </option>
                                        <option value="$1000">$1000</option>
                                        <option value="$1000-$5000">$1000 - $3000</option>
                                        <option value="$3000-$5000">$3000 - $5000</option>
                                        <option value="$5000+">$5000+</option>
                                    </select>
                                    {formErrors.budget && <p className="error-message">{formErrors.budget}</p>}
                                    <div className="dropdown-icon">▼</div>
                                </div>
                            </div>
                            <div className="contact__form-div">
                                <input type="email" name="email" className={`contact__form-input ${formErrors.email ? "error" : ""}`} placeholder={t("contact__form__insert_email")} value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                            </div>
                            <div className="contact__form-div contact__form-area">
                                <textarea name="message" cols="30" rows="5" className={`contact__form-input ${formErrors.message ? "error" : ""}`} placeholder={t("contact__form__write_me_your_project")} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                {formErrors.message && <p className="error-message">{formErrors.message}</p>}
                                <div className="contact__form-line"></div>
                            </div>
                            <div className="contact__lower">
                                <label className="contact__checkbox">
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                        required
                                    />
                                    <p>{t("contact__agree")}</p>
                                </label>
                                {formErrors.agreed && <p className="error-message">{formErrors.agreed}</p>}
                                <button type="submit" className="contact__button">
                                    {t("contact__button_submit")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default MobileContact