import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import HeroRigth from '../../components/HeroSection/HeroRigth'
import Img from '../../assets/intro.png'
import './../../style/pageStyle.scss'
import { useTranslation } from 'react-i18next';
import AboutImg from '../../assets/img.jpg'
import Banner from '../../components/Banner/Banner'
import RichText from '../../components/RichText/RichText';



const AboutPage = () => {
  const { t } = useTranslation();
  return (
      <>
      <Banner
      img={Img}
      title={t("titleAbout")}/>
      <RichText
      accapit1={t("accapit1")}
      accapit2={t("accapit2")}
      accapit3={t("accapit3")}
      accapit4={t("accapit4")}/>

      {/* <h1 className='title m-bottom'>O nas</h1>
      <HeroRigth 
          title='Lorem ipmus'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam sit id sed auctor dignissim tempor. Sed mus platea tortor viverra potenti. Nibh enim pharetra at pulvinar nunc egestas tristique. In varius mauris sed donec felis habitant odio vitae, vitae.'
          imgName={AboutImg}
          classOther = 'heroSection-other leftText'
         />
         <HeroSection 
          title='Lorem ipmus'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam sit id sed auctor dignissim tempor. Sed mus platea tortor viverra potenti. Nibh enim pharetra at pulvinar nunc egestas tristique. In varius mauris sed donec felis habitant odio vitae, vitae.'
          imgName={AboutImg}
         /> */}

         {/* <PlayerVideo 
          video={OnasVideo} /> */}
      </>
  )
}

export default AboutPage