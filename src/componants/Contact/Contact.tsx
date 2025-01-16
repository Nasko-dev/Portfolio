import "./Contact.css";

function Contact() {
  return (
    <div className="Contact-container">
      <h2>Contact</h2>
      <div className="line"></div>

      <div className="contact-card">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102342.56805168439!2d-4.179600875432527!3d47.99813383622013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4810d5972e13aeaf%3A0xd32d85efcaa2cdd0!2s29000%20Quimper!5e1!3m2!1sfr!2sfr!4v1736938948928!5m2!1sfr!2sfr"
            width="100%"
            height="400"
            title="Carte de Quimper, France"
            style={{
              border: 0,
              borderRadius: "25px",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact">
          <h2>Formulaire de contact</h2>
          <form className="contact-form">
            <div className="form-group">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Votre nom complet"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre adresse e-mail"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                id="description"
                name="description"
                placeholder="Votre message"
                rows={5} // Utilisation correcte d'un nombre pour l'attribut rows
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Envoyer Un Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
