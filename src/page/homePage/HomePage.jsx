import React from 'react'
import Intro from './../../components/intro/Intro'
import Cards from './../../components/Cards/Cards'
import HeroSection from '../../components/HeroSection/HeroSection'
import HeroImage from './../../assets/pic2.webp';
import HeroImageMob from '../../assets/pic2mob.webp';
import HeroImage2 from './../../assets/pic3.webp';
import HeroImage2Mob from './../../assets/pic3mob.webp';
import HeroBannerImage from '../../assets/heroBannerImage.webp'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import HeroRigth from '../../components/HeroSection/HeroRigth'
import { useTranslation } from 'react-i18next';
import Seo from "../../components/SEO/SEO"

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
    <Seo
    title={t("seoTitle")}
    description={t("seoDescription")}/>
      <Intro intro={t("intro")}
             more={t("more")}
             contact={t("contact")}/>
      <Cards />
      
     <div className='dec'>
      <HeroSection
      title={t("titleHero")}
      text={t("textWhyMetakol")} 
      imgName={HeroImage}
      mob={HeroImageMob}/>
      </div>
       <div className='mob'>
      <HeroRigth
      title={t("titleHero")}
      text={t("textWhyMetakol")} 
      imgName={HeroImage}
      mob={HeroImageMob}/>
      </div>

      <HeroBanner 
      image={HeroBannerImage}
      title={t("herobanner")}
      link='/about'/>
      <HeroRigth
       classOther = 'heroSection-other leftText'
       title= {t("homehero2title")}
       text={t("homehero2text")}
       imgName={HeroImage2} 
       mob={HeroImage2Mob}
      />
      <div className='m-bottom'></div>
    </>
  )
}

export default HomePage