import Main from "../main/main"
import Heros from "../heros/heros.jsx"
import Coachs from "../coatches/coatchs"
import Programs from "../programs/programs"
import Footer from "../footer.jsx/footer"
import HintSection from "../hints/reuseHint.jsx";
import hints2 from '../../assets/programs/hints2.PNG';
import hints3 from '../../assets/programs/hints3.png';
import hints from '../../assets/programs/back.JPG';
import { useContext } from "react"
import { DarkContext } from "../darkLight/darkContext.jsx"
import TipsGols2 from "../golTips/galTip2.jsx"
import FAQ from "../QA/questions.jsx"
export default function Home() {
      const { isDark } = useContext(DarkContext);
    
    return (
        <div className=" relative">
            <Main />
            <TipsGols2 />     
            <Coachs />
            {/* <HintSection image={hints2} text="The best place to provide you with professional service" bgColor={isDark ? '#161C24' : "#fff" } textColor={isDark ? "#fff"  : '#161C24' } reverse={true} minbg={"hints1"} /> */}
            <HintSection image={hints3} text="Here you will transform from just an ordinary player to a professional player" hin="hints" bgColor={isDark ? '#161C24' : "#fff" } textColor={isDark ? "#fff"  : '#161C24' } minbg={"hints2"} />
            <Heros/>
            <HintSection image={hints} text="You are in the right place to become stronger and have greater muscle mass and flexibility in your body by combining more than one sport professionally" bgColor={isDark ? '#161C24' : "#fff" } textColor={isDark ? "#fff" : '#161C24' } minbg={"hints3"} />
            {/* <Hints /> */}
            <Programs name="Programs"/>
            <FAQ/>
            <Footer />
            {/* <ScrollProgressBar />   */}
            {/* <ScrollTop />  */}
        </div>
    )
}