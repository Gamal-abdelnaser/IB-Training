import Main from "../main/main"
import TipsGols from "../golTips/goalTips"
import Heros from "../heros/heros.jsx"
import Coachs from "../coatches/coatchs"
import Programs from "../programs/programs"
import Hints from "../hints/hints"
import Hints2 from "../hints/hints2"
// import About from "../../about/about"
// import ScrollTop from '../scroll/scrollTop'
import Footer from "../footer.jsx/footer"
import Hints3 from "../hints/hints3.jsx"
// import ScrollProgressBar from "../scroll/scrollProgress"
export default function Home() {
    return (
        <div className=" relative">
            <Main />
            <TipsGols />
            <Coachs />
            <Hints2 />
            <Hints3 />
            <Heros/>
            <Hints />
            <Programs/>
            <Footer />
            {/* <ScrollProgressBar />   */}
            {/* <ScrollTop />  */}
        </div>
    )
}