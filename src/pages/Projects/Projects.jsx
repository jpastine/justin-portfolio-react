import { projectsData } from "../../data/projects";
import ProjectList from "../../components/ProjectList";
import './Projects.css'
import Contact from "../Contact/Contact";

const Projects = () => {
  const projects = projectsData
  return ( 
    <>
      <main className="projects">
        <h1>Projects</h1>
        <section>
          <ProjectList 
            projects={projects}
            />
        </section>
      </main> 
      
    </>

  );
}
 
export default Projects;