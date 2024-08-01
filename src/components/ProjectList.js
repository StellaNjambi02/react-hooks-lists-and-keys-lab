import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  let project=projects.map((projectitem)=>{
    return (
    <ProjectItem key={projectitem.id} 
     name={projectitem.name} about={projectitem.about} technologies={projectitem.technologies}/>
    )  
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {project}
        </div>
    </div>
  );
}

export default ProjectList;
