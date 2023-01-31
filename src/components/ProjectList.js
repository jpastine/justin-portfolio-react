import ProjectPreview from "./ProjectPreview"

const ProjectList = (props) => {
  console.log(props)
  return (
    <div>
      <ul>
        {props.projects.map((item) => (
          <ProjectPreview key={item.title} title={item.title} image={item.image} />
        ))}
      </ul>
    </div>
          
            
          
      
  )
}

export default ProjectList