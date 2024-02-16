import Head from "next/head";
import styles from "./page.module.scss";
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardSection from "@/components/homeNoAuth/cardSection";
import SlideComponent from "@/components/common/slideComponent";
const HomeNoAuth = () =>{

  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./icon.ico" />
      </Head>
      <main>
        <div className={styles.sectionBg}>
          <HeaderNoAuth/>
          <PresentationSection/>
          <CardSection/>
          <SlideComponent/>
        </div>
      </main>
    </>
  );
}

export default HomeNoAuth