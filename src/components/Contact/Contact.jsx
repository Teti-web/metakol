import React, {useRef} from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser';

const Contact = (props) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8w8qdjf', 'template_3ahpk8l', form.current, 'D2R_YF6UKszBPIAbK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section className='contact'>
        <div className='container contact-container'>
            <div className='contact-info'>
            <h2>{props.contact}</h2>
                <p>{props.contactText}</p>

                <a href="mailto:m.sharma@metakol.pl">m.sharma@metakol.pl</a>
                <a href="tel:+48 790 255 932">+48 790 255 932</a>
                <a href="tel:+48 537 928 828">+48 537 928 828</a>
                <a href="tel:+48 739 079 989">+48 739 079 989</a>
                <address>
                ul. Kukiełki,7 <br/> <br/>
                02-207, Warszawa
                </address>
            </div>
             <div className='contact-content'>
                <h2>{props.contactForm}</h2>
               <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='to_name'  placeholder={props.name} required/>
                <div className='oneLine'>
                    <input type="email" name="to_email" id="" placeholder='Email'required/>
                    <input type="tel" name="to_number" id=""placeholder={props.numberphone} required />
                </div>
                
                <textarea name="message" id="" cols="30" rows="10" placeholder={props.message} required></textarea>
                 <input type="submit" value={props.send}  className='btn' />
               </form>
             </div>
        </div>
    </section>
  )
}

export default Contact