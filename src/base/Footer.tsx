import { Link, Navigate } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <p>© 2025 Fråga pedagogen</p>
      <section className="links">
        <Link to='admin'>Logga in som lärare</Link>
        <a href="mailto:kicki.lindstrand@gmail.com">Kontakta oss</a>
      </section>
    </footer>
  );
};
