import React from 'react'
import {Link} from 'react-router-dom'
import './notFound.scss'

const NotFound = () => {
  return (
    <section className='notfound'>
    <h1 className='notfound-title'>404</h1>

<div class="info404">
  <h2>Nie możemy znaleźć tej strony</h2>
  <Link to="/" className='btn'  rel="noreferrer noopener">Strona glówna</Link>
</div>
    </section>
  )
}

export default NotFound