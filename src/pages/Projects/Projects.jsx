import { projectsData } from "../../data/projects";
import ProjectList from "../../components/ProjectList";


const Projects = () => {
  const projects = projectsData
  return ( 
    <main>
      <h1>Projects</h1>
      <section>
        <ProjectList 
          projects={projects}/>
      </section>
      
    </main> 
  );
}
 
export default Projects;