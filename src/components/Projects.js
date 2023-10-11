import React from "react";
import { projects } from "./data";

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
                    </div>
                ))}
            </div>
        </section>

    )
}