import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { CardActionArea, FormGroup } from "@mui/material";
import Checkbox from "@mui/material";
import FormControlLabel from "@mui/material";

export default function Home() {
  function navFunc() {
    document.querySelector("html").classList.toggle("open");
  }
  return (
    <>
      <Head>
        <title>imanoc,inc.</title>
      </Head>
      <div className="body">
        <div className="hero min-h-screen">
          <div className="hero-placeholder"></div>
          <div
            className="hero-main"
            style={{ backgroundImage: `url(/masthead.png)` }}
          ></div>

          <div className="contents container">
            <div className="text">
              <h1>
                <span className="title01">
                  <h1 className="text-lg">imanoc</h1>
                </span>
                <span className="title02">
                  <span className="text-sm">I&apos;m a NOC.</span>
                </span>
              </h1>
              <span className="title02">
                <span className="text-xs">Ima knock another liberty.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bridge">
          <p className="text-sm">【NOC】</p>
          <p className="text-xs">Non-official coverの略。</p>
          <p className="text-xs">スパイ、工作員のこと。</p>
        </div>

        <div className="cat service container">
          <h2>service</h2>
          <div className="sm:flex overflow-x-auto service">
            <div className="max-w-sm rounded-lg shadow-md m-4 flex-none">
              <img className="" src="/service/consulting.jpg" alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  consulting
                </h5>
                <p className="mb-3 text-xs font-normal text-white">
                  コンセプトで支援します。
                </p>
                <a
                  href="/service/consulting"
                  className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-[#1a1a1a] rounded-lg hover:bg-[#333333]"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm rounded-lg shadow-md m-4 flex-none">
              <img
                className="rounded-t-lg"
                src="/service/marketing.jpg"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  marketing
                </h5>
                <p className="mb-3 text-xs font-normal text-white">
                  デザインで仕組み化します。
                </p>
                <a
                  href="/service/consulting"
                  className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-[#1a1a1a] rounded-lg hover:bg-[#333333]"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm rounded-lg shadow-md m-4 flex-none">
              <img
                className="rounded-t-lg"
                src="/service/engineer.jpg"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  engineering
                </h5>

                <p className="mb-3 text-xs font-normal text-white">
                  ロジックで開発します。
                </p>
                <a
                  href="/service/consulting"
                  className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-[#1a1a1a] rounded-lg hover:bg-[#333333]"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cat contact container">
          <h2>contact</h2>
          <section className="contact">
            <div className="py-4 px-4 mx-auto max-w-screen-md">
              <form action="#" className="space-y-8">
                <div>
                  <label
                    for="subject"
                    className="block mb-2 text-xs font-medium text-white"
                  >
                    name
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="focus:outline-none shadow-sm bg-[#1a1a1a] focus:bg-[#333333] text-white text-xs rounded-lg block w-full p-2.5 placeholder-[#4d4d4d]"
                    placeholder="your name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-xs font-medium text-white"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="focus:outline-none shadow-sm bg-[#1a1a1a] focus:bg-[#333333] text-white text-xs rounded-lg block w-full p-2.5 placeholder-[#4d4d4d]"
                    required
                    placeholder="email address"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="block mb-2 text-xs font-medium text-white"
                  >
                    message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="focus:outline-none shadow-sm bg-[#1a1a1a] focus:bg-[#333333] text-white text-xs rounded-lg block w-full p-2.5 placeholder-[#4d4d4d]"
                    required
                    placeholder="put message here"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="focus:outline-none w-4 h-4 cursor-pointer"
                  />
                  <label
                    for="link-checkbox"
                    className="ml-2 text-xs font-medium text-gray-300"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-[#b3b3b3] hover:text-[#4d4d4d] underline"
                    >
                      privacy policy
                    </a>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  className="focus:outline-none py-3 px-5 text-xs font-medium text-center text-white rounded-lg bg-[#1a1a1a] sm:w-fit hover:bg-[#333333]"
                >
                  send message
                </button>
              </form>
            </div>
          </section>
        </div>
        <div className="cat overview container">
          <h2>overview</h2>
          <section className="overview">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="/imanoc_logo_white.svg" alt="imanoc_logo" />
              </div>
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-sm font-extrabold tracking-tight leading-none">
                  imanoc株式会社
                </h1>
                <p className="max-w-2xl mb-6 font-light text-xs">
                  <br />
                  <br />
                  <span className="font-bold">代表取締役</span>
                  <br />
                  <br />
                  南條 友馬
                  <br />
                  <br />
                  <br />
                  <span className="font-bold">設立日</span>
                  <br />
                  <br />
                  2022年11月1日
                  <br />
                  <br />
                  <br />
                  <span className="font-bold">住所</span>
                  <br />
                  <br />
                  〒103-0006 東京都中央区日本橋富沢町7-16 THE GATE日本橋人形町4F
                  <br />
                  <br />
                  <br />
                  <span className="font-bold">資本金</span>
                  <br />
                  <br />
                  5,000,000円
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
