import React from "react";
import "./ProfessionalResume.css";

const ProfessionalResume = () => {
    return (
        <div className="resume-container">
            <div className="resume-content">
            <h1 className="name"> Victor Llivina</h1>
            <h2>Software Engineer</h2>
            
            
                <div className="contact">
                    <h3>Contact</h3>
                    <p>vmkrasovsky@yahoo.com</p>
                    <p>+34 671-278-686</p>
                    <p>Madrid, Spain</p>
                   
                </div>
                
                <div className="experience">
                    <h3>Experience</h3>
                    <p><strong>DC Cable LLC Software Engineer & Project Manager</strong> </p>
                    <p>Jan 2019-Present</p>
                    <p>Developed scalable web applications with React and Node.js.</p>
                    <p>Data analysis</p>
                    <p>Identified plans and resources required to meet project goals and objecti</p>
                    <p>Maintained open communication by presenting regular updates on project status to
                    customers.</p>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <ol>
                        <li>JavaScript (React, Node.js</li>
                        <li>Python, SQL</li>
                        <li>Finance & Data Analysis</li>
                        <li>Web Development and API Integration</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalResume;