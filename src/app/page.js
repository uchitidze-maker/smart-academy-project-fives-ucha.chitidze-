import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
          <Navbar/>
          <p>გამარჯობა!</p>
          <Footer/>
        </div>
   );    
  } 