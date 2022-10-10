import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {year}
        <a
          className="footer__link"
          href="https://github.com/uladzimirfilipau"
          target="_blank"
          rel="noopener noreferrer"
          title="https://github.com/uladzimirfilipau"
        >
          Uladzimir Filipau
        </a>
      </p>
    </footer>
  );
}

export default Footer;
