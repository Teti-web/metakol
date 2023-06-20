import React from 'react';
import './cardStyle.scss';
import Card from './Card';
import { useTranslation } from 'react-i18next';
import COAL from '../../assets/coal.webp';
import COKE from '../../assets/coke.webp';
import COALMOB from '../../assets/coalMob.webp';
import COKEMOB from '../../assets/cokeMob.webp';

const Cards = () => {
    const { t, i18n } = useTranslation();
  return (
    <section className='cards'>
    <div className='container cards-container'>
       <Card
          image={COAL}
          titleCard = {t("titleCard1")}
          textCard= {t("textCard1")}
          more={t("more")}
          imageMob={COALMOB}/>

       <Card
         image={COKE}
          titleCard = {t("titleCard2")}
          textCard= {t("textCard2")}
          more={t("more")}
          imageMob={COKEMOB}/>
      
    </div>
    </section>
  )
}

export default Cards