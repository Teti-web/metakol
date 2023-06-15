import React from 'react'
import Contact from '../../components/Contact/Contact'
import ContactInfo from '../../components/Contact/ContactInfo';
import { useTranslation } from 'react-i18next';
import Seo from "../../components/SEO/SEO"

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <> 
    <Seo
    title={t("seoTitleContact")}
    description={t("seoDescriptionContact")}/>
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

export default ContactPage