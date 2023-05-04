import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const FormContactEmail = ({ keys }) => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [user_email, setUser_Email] = useState();

  const handleEmailChange = (e) => {
    setUser_Email(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user_email || user_email.length < 1) {
      return alert("Por favor, ingrese un mail ❌");
    }
    setShowCaptcha(true);
  };

  const sendEmail = async (captchaValue) => {
    const params = {
      user_email,
      "g-recaptcha-response": captchaValue,
    };

    await emailjs
      .send(
        keys.EMAILJS_SERVICE,
        keys.FOOTER_EMAILJS_TEMPLATE,
        params,
        keys.EMAILJS_PUBLIC_KEY,
        "g-recaptcha-response"
      )
      .then(() => {
        alert("Mail enviado con éxito ✅");
        setUser_Email();
        setShowCaptcha(false);
      })
      .catch(
        () => alert("Ha ocurrido un error, intentelo mas tarde ⛔"),
        setShowCaptcha(false)
      );
  };
  return (
    <div class="newsletter-section">
      <div class="container">
        <div class="row justify-content-lg-between justify-content-center align-items-center">
          <div class="col-lg-6 col-12">
            <div class="newsletter-title">
              <h4>Contactenos!</h4>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="newsletter-form">
              <form className="d-flex flex-wrap" onSubmit={handleSubmit}>
                <input
                  onChange={handleEmailChange}
                  value={user_email}
                  type="email"
                  placeholder="Mail de contacto"
                  className="input-email"
                />
                <input
                  type="submit"
                  value="Suscribirse"
                  className="subscribe-btn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContactEmail;
