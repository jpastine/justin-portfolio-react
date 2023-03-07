import { projectsData } from "../../data/projects";
import ProjectList from "../../components/ProjectList";
import './Projects.css'
import Contact from "../Contact/Contact";

const Projects = () => {
  const projects = projectsData
  return ( 
    <main>
      <h1>Projects</h1>
      <section>
        <ProjectList 
          projects={projects}/>
      </section>
      <Contact />
      
    </main> 
  );
}
 
export default Projects;