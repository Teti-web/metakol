import React from 'react'
import {Link} from 'react-router-dom'
import './notFound.scss'
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <section className='notfound'>
    <h1 className='notfound-title'>404</h1>

<div class="info404">
  <h2>{t("notfoundtitle")}</h2>
  <Link to="/" className='btn'  rel="noreferrer noopener">{t("homepage")}</Link>
</div>
    </section>
  )
}

export default NotFound