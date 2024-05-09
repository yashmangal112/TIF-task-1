import Image from "next/image";
import Layout from "./layout";
import About from "./components/About";
import LatestArticles from "./components/LatestArticles";
import LandingPage from "./components/LandingPage";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; URL=https://tif-task-2-phi.vercel.app/" />
        <title>Redirecting...</title>
      </Head>
    </>
  );
}
