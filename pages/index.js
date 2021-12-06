import Head from "next/head";
import { useState } from "react";
import { Book } from "../Components/Book";

export default function Home() {
  const [isYearBookOpen, setIsYearBookOpen] = useState(false);
  const [isYearBookDisplayed, setIsYearBookDisplayed] = useState(false);

  const onClickYearBook = () => {
    setIsYearBookOpen(!isYearBookOpen);
    if (!isYearBookOpen) {
      setTimeout(() => setIsYearBookDisplayed(true), 1000);
    } else {
      setIsYearBookDisplayed(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>DAA Yearbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"
        style={{ overflow: "hidden !important" }}
      >
        <div
          style={{
            backgroundImage: 'url("/degenacademy.jpeg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "fixed",
            marginLeft: "auto",
            height: 600,
            width: 1200,
          }}
        ></div>

        {!isYearBookDisplayed ? (
          <div
            className={isYearBookOpen ? "openYearbook" : "unopenedYearbook"}
            onClick={onClickYearBook}
            style={{
              backgroundImage: 'url("/yearbookcoverbrown.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "90%",
            }}
          ></div>
        ) : null}
        {isYearBookDisplayed ? (
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <Book />
          </div>
        ) : null}
      </main>
      {/* 
      <footer className="flex items-center justify-center w-full h-24 ">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  );
}
