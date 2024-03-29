import Head from "next/head";
import styles from "./page.module.scss";
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardSection from "@/components/homeNoAuth/cardSection";
import SlideSection from "../components/homeNoAuth/slideSection/index";
import { courseService } from "@/service/courseService";
import Footer from "@/components/common/footer";





const HomeNoAuth = async () =>{

  const newestCourses = await courseService.getNewestCourses();


  return (
    <>
      <main>
        <div className={styles.sectionBg}>
          <HeaderNoAuth/>
          <PresentationSection/>
        </div>
        <CardSection/>
        <SlideSection newestCourses={newestCourses}/>
        <Footer/>
      </main>
    </>
  );
};


export default HomeNoAuth