import { findProject } from "../../utilities/findProject"
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="" />
      <a href={project.repositoryLink}>GitHub Link</a>
      <a href={project.deploymentLink}>Play Here</a>
    </main>
  )
}

export default ProjectDetails