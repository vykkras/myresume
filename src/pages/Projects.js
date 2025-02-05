import {motion} from "framer-motion";
import "./Projects.css";

function Projects(){
    return(
        <motion.div className="projects-section"
            initial={{opacity:0, x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            >
                <h2>Projects</h2>
                <p>Here are some cool things I've helped build!</p>
            </motion.div>
             

    )
    
}
export default Projects;