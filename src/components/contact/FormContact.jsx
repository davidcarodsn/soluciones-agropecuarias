import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const initialValues = {
  user_email: '',
  user_name: '',
  user_phone: '',
  message: ''
}

const FormContact = ({ keys }) => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [data, setData] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.user_email.length < 1 || 
      data.message.length < 1 || 
      data.user_name < 1 || 
      data.user_phone.length < 1
    ) {
      return alert('Todos los campos del formulario son obligatorios')
    }
    setShowCaptcha(true);
  }

  const handleChangeData = (input) => {
    setData({
      ...data,
      [input.target.name]: input.target.value
    });
  }

  const sendEmail = async(captchaValue) => {
    const params = {
      ...data,
      'g-recaptcha-response': captchaValue
    }

    await emailjs.send(
      keys.EMAILJS_SERVICE, 
      keys.CONTACT_EMAILJS_TEMPLATE, 
      params,
      keys.EMAILJS_PUBLIC_KEY, 
      'g-recaptcha-response'
    )
      .then(() => {
        alert('Mail enviado con éxito ✅')
        setData(initialValues);
        setShowCaptcha(false)
      })
      .catch(() => alert('Ha ocurrido un error, intentelo mas tarde ⛔'), setShowCaptcha(false))
  }

  return (
    <div className="col-lg-6 col-12">
        <div className="contact-form">
          <form className="comment-form" onSubmit={handleSubmit}>
            <input onChange={handleChangeData} type="text" name="user_name" value={data.user_name} placeholder="Nombre o empresa*" />
            <input onChange={handleChangeData} type="email" name="user_email" value={data.user_email} placeholder="Mail*"  />
            <input onChange={handleChangeData} type="text" name="user_phone" value={data.user_phone} placeholder="Telefono*" />
            <textarea onChange={handleChangeData} name="message" id="role" cols="30" rows="10" value={data.message} placeholder="Mensaje*"></textarea>
            {
              showCaptcha
              ? (<ReCAPTCHA sitekey={keys.RECAPTCHA_KEY} onChange={sendEmail} />)
              : (
                <button onClick={handleSubmit} type="button" className="lab-btn">
                  <span>Enviar</span>
                </button>
              )
            }
          </form>
        </div>
    </div>
  )
}

export default FormContact;
