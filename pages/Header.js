import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  function navFunc() {
    document.querySelector("html").classList.toggle("open");
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <Link href="/">
            <div className="site cursor-pointer">
              <img src="/logo_white.png" alt="imanoc_logo" />
              imanoc
            </div>
          </Link>

          <button className="navbtn sm:hidden" onClick={navFunc}>
            <span className="navbtn-bar"></span>
            <span className="sr-only">MENU</span>
          </button>
          <div className="hidden sm:block">
            <nav className="nav-pc">
              <ul className="flex">
                <li>
                  <Link href="/company">
                    <a>company</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>service</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* スマホのみ */}
          <nav className="nav">
            <ul className="nav-menu">
              <li>
                <Link href="/">
                  <a>
                    company <span> imanocとは </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    service <span> 事業内容 </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    blog <span> ブログ </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    contact <span> お問い合わせ </span>
                  </a>
                </Link>
              </li>
            </ul>

            <ul className="nav-sns">
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
                    <img src="/img-sns/logo-instagram.svg" alt="instagram" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <img src="/img-sns/logo-youtube.svg" alt="youtube" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <img
                      className="w-[35px]"
                      src="/img-sns/LINE_Brand_icon.png"
                      alt="Line"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          {/* スマホのみ */}
        </div>
      </header>
    </>
  );
}
