import React from 'react'
import Intro from './../../components/intro/Intro'
import Cards from './../../components/Cards/Cards'
import HeroSection from '../../components/HeroSection/HeroSection'
import HeroImage from './../../assets/heroImage.jpg'
import HeroBannerImage from '../../assets/heroBannerImage.png'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import HeroRigth from '../../components/HeroSection/HeroRigth'
import Contact from '../../components/Contact/Contact'
import ContactInfo from '../../components/Contact/ContactInfo';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Intro intro={t("intro")}
             more={t("more")}
             contact={t("contact")}/>
      <Cards />
      <HeroSection
      title={t("titleHero")}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam sit id sed auctor dignissim tempor. Sed mus platea tortor viverra potenti. Nibh enim pharetra at pulvinar nunc egestas tristique. In varius mauris sed donec felis habitant odio vitae, vitae." 
      imgName={HeroImage}/>
      <HeroBanner 
      image={HeroBannerImage}
      title={t("herobanner")}
      link='/about'/>
      <HeroRigth
       classOther = 'heroSection-other leftText'
       title="Lorem Ipsum"
       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam sit id sed auctor dignissim tempor. Sed mus platea tortor viverra potenti. Nibh enim pharetra at pulvinar nunc egestas tristique. In varius mauris sed donec felis habitant odio vitae, vitae." 
       imgName={HeroImage} 
      />
      <ContactInfo
        contact={t("contact")}
        contactText={t("contactText")}/>
      <Contact
        contactForm={t("contactForm")}
        contact={t("contact")}
        contactText={t("contactText")}
        name={t("name")}
        send={t("send")}
        numberphone={t("numberphone")}
        message = {t("message")}/>
    </>
  )
}

export default HomePage