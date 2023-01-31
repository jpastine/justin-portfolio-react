import ProjectPreview from "./ProjectPreview"

const ProjectList = (props) => {
  return (
    <div>
      <ul>
        {props.projects.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.repositoryLink}</p>
            <p>{item.deploymentLink}</p>
          </li>
        ))}
      </ul>
    </div>
      
  )
}

export default ProjectList