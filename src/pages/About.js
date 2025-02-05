import {motion} from "framer-motion";
import "./About.css";

function About(){
    return (
    <motion.div className="about-section"
    initial={{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1}}
    viewport={{once: true}}>
        <h2>About Me</h2>
        <p>I love building applications that make a difference</p>
    </motion.div>

    ); 
}
export default About;