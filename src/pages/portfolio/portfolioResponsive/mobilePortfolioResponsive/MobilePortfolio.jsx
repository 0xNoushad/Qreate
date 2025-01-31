import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import projectsData from '../../Data';
import "./MobilePortfolio.scss"


const MobilePortfolio = ({ language, body }) => {
    const { t } = useTranslation();
    return (
        <motion.section className="portfolio" ref={(el) => (body = el)} initial={{ opacity: 0, y: 50, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }}  exit={{ opacity: 0, y: 100, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }}>
            <div className="portfolio__container">
                <div className="menu">
                    <motion.div className="text-container" style={{ textAlign: language === "ar" ? "right" : "left", }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 100, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }}>
                        <div className="workk__work">
                            <h1 className='work__work-text' style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.3rem", fontSize: language === "ar" ? "4rem" : "", left: language === "ar" ? "15rem" : "0" }}>{t("portfolio__work_title")}</h1>
                        </div>
                        <motion.div className="scrollbarr" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 100, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }}>
                            {projectsData.map((item, index) => (
                                <div className="work__title" key={index} style={{ height: "4rem", gap: "2rem" }}>
                                    <div className="menu-text">
                                        <Link to={`/projects/${item.title}`}><h1 data-text={item.title}>{item.title.slice(0,8)}..</h1></Link>
                                        <div className="isNew" style={{ right: item.class === "Qreate" ? "3rem" : item.class === "lelu" || item.class === "cairo" ? "0.5em" : "" }}>
                                            {item.workingOnIt && (
                                                <h3 className='workingonit'>
                                                    Workin' On It
                                                </h3>
                                            )}
                                            {item.newProject && (
                                                <h3 className='newproject'>
                                                    New Project
                                                </h3>
                                            )}
                                        </div>
                                        <div className="categories">
                                            <p>{item.category[0]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default MobilePortfolio