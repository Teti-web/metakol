import React, {useMemo} from 'react'
import '../../style/pageStyle.scss'
import HeroRigth from '../../components/HeroSection/HeroRigth'
import Banner from '../../components/Banner/Banner';
import { useTranslation } from 'react-i18next';
import RichText from '../../components/RichText/RichText'
import HeroSection from '../../components/HeroSection/HeroSection';
import IMG from '../../assets/coal2.webp';
import IMG2 from '../../assets/coal-coking-and-pci.webp';
import Img3 from '../../assets/offerpage.webp';
import Img3mob from '../../assets/offerpagemobile.webp'
import IMG4 from '../../assets/coal3.webp';
import Table from '../../components/table/Table'
import {COLUMNS} from '../../components/table/Colums/column';
import {COLUMNS2} from '../../components/table/Colums/columnsCoke';
import DATA from '../../components/table/Data/data';
import DATA2 from '../../components/table/Data/data1.json';
import DATA3 from '../../components/table/Data/dataCoke.json';
import Seo from '../../components/SEO/SEO'

const OffersPage = () => {
  const { t } = useTranslation();
  const data = useMemo(()=> DATA);
  const data2 = useMemo(()=> DATA2);
  const data3 = useMemo(()=> DATA3);
  const columns = useMemo(() => COLUMNS, []);
  const columns2 = useMemo(()=> COLUMNS2, []);
  return (
    <>
    <Seo
    title={t("seoTitleOffert")}
    description={t("seoDescriptionOffert")}/>
    <Banner
    // title={t("titleOffert")}
    img = {Img3}
    imgmob = {Img3mob}
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
   
     <Table
     data = {data3}
     columns = {columns2}/>

     <div className='m-25'></div>

    <HeroRigth
    imgName={IMG4}
     title={t("titleCard1")}
     text= {t("coalText")}/>
   <Table
     data = {data}
     columns = {columns}/>

<div className='m-25'></div>

<div className='dec'>
    <HeroSection
     imgName={IMG}
     title="PCI"
     text={t("pciText")}/>
     </div>

     <div className='mob'>
     <HeroRigth
   imgName={IMG}
   title="PCI"
   text={t("pciText")}/>
     </div>

    <Table
     data = {data2}
     columns = {columns}/>
    </>
  )
}

export default OffersPage

