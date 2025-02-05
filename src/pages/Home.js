import "./Home.css"
import {motion} from "framer-motion";

function Home(){
    return (
<div className = "home-container">
    <motion.div className = "hero"
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 1}}
        >
        <h1>Victor Llivina</h1>
        <h2>Software Engineer</h2>
        <p>Building innovative solutions, one line of code at a time</p>
        <motion.a href="/resume.pdf" download className="resume-btn"
        whileHover={{scale:1.1}}
        whiteTap={{scale: 0.9}}
        >
            Download Resume
            </motion.a>
            </motion.div>
            </div>

           

            


    );
    
}
export default Home;