import ProjectPreview from "./ProjectPreview"
import './ProjectList.css'

const ProjectList = (props) => {
  console.log(props)
  return (
    <div>
      <ul className="list">
        {props.projects.map((item) => (
          <ProjectPreview key={item.title} title={item.title} image={item.image} />
        ))}
      </ul>
    </div>
          
            
          
      
  )
}

export default ProjectList