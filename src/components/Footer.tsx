// components/Footer.js

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Sheikh Talha Ahmed. All rights reserved.</p>
          <ul className="social-media">
            <li>
              <a href="https://github.com/TALHA-AHMED12" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
                <a href="mailto:sheikhtallhaahmed098@gmail.com" target="_blank">Email</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  