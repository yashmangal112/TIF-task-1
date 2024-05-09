import Image from "next/image";
import Layout from "./layout";
import About from "./components/About";
import LatestArticles from "./components/LatestArticles";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <Layout>
      <About/>
    </Layout>
  );
}
