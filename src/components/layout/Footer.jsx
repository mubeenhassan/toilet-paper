const Footer = () => {
  return (
    <footer>
      <p>
        Copyright © 2020-{new Date().getFullYear()} Toilet Paper Tycoon. All
        rights reserved.
      </p>
      <p className="footer-links">
        <a
          href={"https://mctzock.de/legal/imprint"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          Imprint
        </a>
        <a
          href={"https://mctzock.de/legal/privacy"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          Privacy
        </a>
      </p>
    </footer>
  )
}

export default Footer
