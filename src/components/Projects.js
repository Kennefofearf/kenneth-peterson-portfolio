import React from "react";
import { projects } from "./data";

// Imports data from data.js to display projects on the page.

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projectIntro">
            <h2>
                Personal Projects
            </h2>
            <p>
                A showing of apps I've built.
            </p>
            </div>
            <div className="projectGallery"> 
                {projects.map((project) => (
                    <div>
                    <h1 className="projectTitle">
                        {project.title}
                    </h1>
                    <h2>
                        {project.description}
                    </h2>
                    <a href={project.link}>
                    <img alt="" src={project.image} />
                    </a>
                    </div>
                ))}
            </div>
        </section>

    )
}