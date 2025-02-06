import Main from "../main/main"
import TipsGols from "../golTips/goalTips"
import Heros from "../heros/heros.jsx"
import Coachs from "../coatches/coatchs"
import Programs from "../programs/programs"
import Footer from "../footer.jsx/footer"
import HintSection from "../hints/reuseHint.jsx";
import hints2 from '../../assets/programs/hints2.PNG';
import hints3 from '../../assets/programs/hints3.PNG';
import hints from '../../assets/programs/back.JPG';
export default function Home() {
    return (
        <div className=" relative">
            <Main />
            <TipsGols />
            <Coachs />
            <HintSection image={hints2} text="The best place to provide you with professional service" bgColor="#161C24" textColor="#fff" reverse={true} />
            <HintSection image={hints3} text="Here you will transform from just an ordinary player to a professional player" hin="hints" />
            <Heros/>
            <HintSection image={hints} text="You are in the right place to become stronger and have greater muscle mass and flexibility in your body by combining more than one sport professionally" textSize="30px" />
            {/* <Hints /> */}
            <Programs/>
            <Footer />
            {/* <ScrollProgressBar />   */}
            {/* <ScrollTop />  */}
        </div>
    )
}