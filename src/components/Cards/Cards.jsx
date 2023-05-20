import React from 'react';
import './cardStyle.scss';
import Card from './Card';
import { useTranslation } from 'react-i18next';
import COAL from '../../assets/coal.png';
import COKE from '../../assets/coke.png';

const Cards = () => {
    const { t, i18n } = useTranslation();
  return (
    <section className='cards'>
    <div className='container cards-container'>
       <Card
          image={COAL}
          titleCard = {t("titleCard1")}
          textCard= {t("textCard1")}
          more={t("more")}/>

       <Card
         image={COKE}
          titleCard = {t("titleCard2")}
          textCard= {t("textCard2")}
          more={t("more")}/>
      
    </div>
    </section>
  )
}

export default Cards