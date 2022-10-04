import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";

export default function Company() {
  return (
    <>
      <Head>
        <title>company | imanoc,inc.</title>
      </Head>
      <div className="body">
        <div className="hero h-64">
          <div className="hero-placeholder"></div>
          <div
            className="hero-main"
            style={{ backgroundImage: `url(/masthead.png)` }}
          ></div>

          <div className="contents container">
            <div className="text">
              <h1>
                <span className="title01">
                  <h2>company</h2>
                </span>
              </h1>
              <span className="title02">
                <span>imanocについて</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
