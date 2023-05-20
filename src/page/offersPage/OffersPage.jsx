import React, {useMemo} from 'react'
import '../../style/pageStyle.scss'
import Img3 from '../../assets/shutterstock_287753369.jpg'
import HeroRigth from '../../components/HeroSection/HeroRigth'
import Banner from '../../components/Banner/Banner';
import { useTranslation } from 'react-i18next';
import RichText from '../../components/RichText/RichText'
import HeroSection from '../../components/HeroSection/HeroSection';
import IMG from '../../assets/coal.png';
import IMG2 from '../../assets/coke.png';
import Table from '../../components/table/Table'
import {COLUMNS} from '../../components/table/Colums/column';
import DATA from '../../components/table/Data/data';
import DATA2 from '../../components/table/Data/data1.json';

const OffersPage = () => {
  const { t } = useTranslation();
  const data = useMemo(()=> DATA);
  const data2 = useMemo(()=> DATA2);
  const columns = useMemo(() => COLUMNS, []);
  return (
    
    <>
    <Banner
    title={t("titleOffert")}
    img = {Img3}/>

    <RichText
      titleRich={t("titleOferrPage")}
      accapit1= {t("textOferrPage")} />

    <HeroSection
     imgName={IMG2}
     title={t("titleCard2")}
     text={t("cokeText")}/>
   
    <HeroRigth
    imgName={IMG}
     title={t("titleCard1")}
     text= {t("coalText")}/>
     <Table
     data = {data}
     columns = {columns}/>

      <h2 className='title'>PCI</h2>
    <Table
     data = {data2}
     columns = {columns}/>
    </>
  )
}

export default OffersPage

