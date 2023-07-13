import React from 'react'
import HeroImg from '../assets/illustration.png'
import { motion } from 'framer-motion'
import { BrowserView, MobileView } from 'react-device-detect';

function HeroImage() {
  return (
    <>
      <BrowserView>
        <motion.img
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ ease: "easeIn", duration: 2, repeat: Infinity, repeatType: "reverse" }} src={HeroImg} alt='hero-img' height={400} width={400} />
      </BrowserView>
      <MobileView>
        <motion.img
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          exit={{ y: 60 }}
          transition={{ ease: "easeIn", duration: 2, repeat: Infinity, repeatType: "reverse" }} src={HeroImg} alt='hero-img' height={400} width={400} />
      </MobileView>
    </>
  )
}

export default HeroImage