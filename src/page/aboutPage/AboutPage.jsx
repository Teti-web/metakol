import React from 'react'
import Img from '../../assets/aboutImage.webp'
import Imgmob from '../../assets/aboutpagemobile.webp'
import './../../style/pageStyle.scss'
import { useTranslation } from 'react-i18next';
import Banner from '../../components/Banner/Banner'
import RichText from '../../components/RichText/RichText';
import Seo from "../../components/SEO/SEO"


const AboutPage = () => {
  const { t } = useTranslation();
  return (
      <>
      <Seo
      title={t("seoTitleAbout")}
      description={t("seoDescriptionAbout")}/>
      <Banner
      img={Img}
      imgmob={Imgmob}
      alt="coal"
      title={t("titleAbout")}/>
      <RichText
      accapit1={t("accapit1")}
      accapit2={t("accapit2")}
      accapit3={t("accapit3")}
      accapit4={t("accapit4")}/>
      </>
  )
}

export default AboutPage