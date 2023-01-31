import ProjectPreview from "./ProjectPreview"

const ProjectList = (props) => {
  console.log(props)
  return (
    <div>
      <ul>
        {props.projects.map((item) => (
          <li key={item.title}>
            <ProjectPreview title={item.title} />
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