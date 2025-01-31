import React, { useEffect, useRef } from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import MobileAbout from './aboutResponsive/mobileAbout/MobileAbout';
import DesktopAbout from './aboutResponsive/desktopAbout/DesktopAbout';
import RunAnimations from '../../animation/RunAnimations';
import TabletAbout from './aboutResponsive/tabletAbout/TabletAbout';
import { Helmet } from 'react-helmet-async';

const AboutPage = ({ isMobile, language, isTablet }) => {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    const hasAboutShown = sessionStorage.getItem('hasAboutShown');
    if (!hasAboutShown) {
      RunAnimations(screen, body);
      sessionStorage.setItem('hasAboutShown', 'true');
    }
  }, []);
  return (
    <motion.section>
      <Helmet>
        <title>About Qreate - Crafting Exceptional Websites</title>
        <meta
          name="description"
          content="Discover Qreate, a Spirited and Focus team dedicated to crafting unique web experiences. Stand out in the market with exceptional digital solutions."
        />
        <link rel="canonical" href="#" />
      </Helmet>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <motion.div  ref={(el) => (body = el)} className="about section" id='about' initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } }} exit={{ opacity: 0, y: -100, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } }}>
        {isMobile ? (
          <MobileAbout language={language} isMobile={isMobile} />
        ) : isTablet ? (
          <TabletAbout language={language} />
        ) : (
          <DesktopAbout language={language} />
        )}
      </motion.div>
    </motion.section>
  )
}

export default AboutPage