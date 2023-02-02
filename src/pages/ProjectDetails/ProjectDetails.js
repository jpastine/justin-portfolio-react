import { projectsData } from "../../data/projects"
import { findProject } from "../../utilities/findProject"
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src="/screenshot.jpeg" alt="" />
      <a href="https://github.com/jpastine/blackjack.git">GitHub Link</a>
      <a href="https://jpblackjack.netlify.app/">Play Here</a>
    
    </>
  )
}

export default ProjectDetails