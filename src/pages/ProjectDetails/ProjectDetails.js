import { projectsData } from "../../data/projects"
import { findProject } from "../../utilities/findProject"
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  const projectId = useParams()
  return (
    <>
      <h1>{projectsData.title}</h1>
      <p>{projectsData.description}</p>
      <img src="/screenshot.jpeg" alt="" />
      <a href="https://github.com/jpastine/blackjack.git">GitHub Link</a>
      <a href="https://jpblackjack.netlify.app/">Play Here</a>
    
    </>
  )
}

export default ProjectDetails