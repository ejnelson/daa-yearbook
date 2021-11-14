import { parseRelativeUrl } from "next/dist/shared/lib/router/utils/parse-relative-url";
import Head from "next/head";
import { forwardRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const PageCover = forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
const Page = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

function MyBook(props) {
  return (
    <HTMLFlipBook
      width={550}
      height={733}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      className="flip-book"
      onFlip={(page, direction, stuff) => {
        console.log("page", page, stuff);
      }}
      onChangeState={state => {
        console.log("state", state);
      }}
    >
      <PageCover>Lorem ipsum...</PageCover>

      <Page number={1}>Lorem ipsum...</Page>
      <Page number={2}>Lorem ipsum...</Page>
      <Page number={3}>Lorem ipsum...</Page>
      <Page number={4}>Lorem ipsum...</Page>
      <Page number={5}>Lorem ipsum...</Page>
      <Page number={6}>Lorem ipsum...</Page>
      <PageCover>Lorem ipsum...</PageCover>
    </HTMLFlipBook>
  );
}
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
    <div
      style={{
        backgroundImage: 'url("/degenacademy.jpeg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div
          className={isYearBookOpen ? "openYearbook" : "unopenedYearbook"}
          onClick={onClickYearBook}
        ></div>
        {isYearBookDisplayed ? (
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <MyBook />
          </div>
        ) : null}
      </main>

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
      </footer>
    </div>
  );
}
