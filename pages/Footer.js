import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer container">
      <nav className="menus">
        <div className="menu-text">
          <h3>company</h3>
          <ul>
            <li>
              <Link href="/">
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>overview</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>message</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-text">
          <h3>service</h3>
          <ul>
            <li>
              <Link href="/">
                <a>consulting</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>marketing</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>engineering</a>
              </Link>
            </li>
          </ul>
        </div>
      
        <div className="menu-sns">
          <h3>contact</h3>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <img src="/img-sns/logo-twitter.svg" alt="Twitter" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>
                  <img src="/img-sns/logo-instagram.svg" alt="Instagram" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>
                  <img src="/img-sns/logo-youtube.svg" alt="Youtube" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/img-sns/LINE_Brand_icon.png" alt="Line" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
