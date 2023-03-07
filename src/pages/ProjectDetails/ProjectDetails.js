import { findProject } from "../../utilities/findProject"
import { useParams } from "react-router-dom"
import './ProjectDetails.css'

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)

  return (
    <main className="details">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="" className="details-pic" />
      <a href={project.repositoryLink} className='prev-link'>GitHub Link</a>
      <a href={project.deploymentLink} className='prev-link'>Launch Here</a>
    </main>
  )
}

export default ProjectDetails