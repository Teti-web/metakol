import React, {useMemo} from 'react'
import '../../style/pageStyle.scss'
import Img3 from '../../assets/offerImage.webp'
import HeroRigth from '../../components/HeroSection/HeroRigth'
import Banner from '../../components/Banner/Banner';
import { useTranslation } from 'react-i18next';
import RichText from '../../components/RichText/RichText'
import HeroSection from '../../components/HeroSection/HeroSection';
import IMG from '../../assets/coal1.webp';
import IMG2 from '../../assets/coke1.webp';
import Table from '../../components/table/Table'
import {COLUMNS} from '../../components/table/Colums/column';
import DATA from '../../components/table/Data/data';
import DATA2 from '../../components/table/Data/data1.json';
import Seo from '../../components/SEO/SEO'

const OffersPage = () => {
  const { t } = useTranslation();
  const data = useMemo(()=> DATA);
  const data2 = useMemo(()=> DATA2);
  const columns = useMemo(() => COLUMNS, []);
  return (
    <>
    <Seo
    title={t("seoTitleOffert")}
    description={t("seoDescriptionOffert")}/>
    <Banner
    // title={t("titleOffert")}
    img = {Img3}
    alt= "transport ship"/>

    <div className='textcenter'>
    <RichText
      titleRich={t("titleOferrPage")}
      accapit1= {t("textOferrPage")} />
      </div>

    <div className='dec'>
    <HeroSection
     imgName={IMG2}
     title={t("titleCard2")}
     text={t("cokeText")}/>
     </div>

     <div className='mob'>
     <HeroRigth
   imgName={IMG2}
   title={t("titleCard2")}
   text={t("cokeText")}/>
     </div>
   

    <HeroRigth
    imgName={IMG}
     title={t("titleCard1")}
     text= {t("coalText")}/>



     <Table
     data = {data}
     columns = {columns}/>

      <h2 className='title m-25'>PCI</h2>
    <Table
     data = {data2}
     columns = {columns}/>
    </>
  )
}

export default OffersPage

