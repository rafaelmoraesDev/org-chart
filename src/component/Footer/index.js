import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/rafaelmoraesdev/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/64/3670/3670129.png"
                alt="Logo LinkedIn"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/rafaelmoraesDev"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/64/270/270798.png"
                alt="Logo Github"
              />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img className="logo" src="https://www.github.com/rafaelmoraesDev.png" alt="Logo" />
      </section>
      <section>
        <p>Developed by Rafael Moraes.</p>
      </section>
    </footer>
  )
}

export default Footer
