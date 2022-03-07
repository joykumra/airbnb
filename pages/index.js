import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Content from "../components/Content/HomeContent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Book hotels for staying" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Banner></Banner>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
