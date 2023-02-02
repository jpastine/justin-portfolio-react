import { projectsData } from "../../data/projects"

const ProjectDetails = () => {
  return (
    <>
      <h1>{projectsData[0].title}</h1>
      <p>{projectsData.description}</p>
      <img src="/screenshot.jpeg" alt="" />
      <a href="https://github.com/jpastine/blackjack.git">GitHub Link</a>
      <a href="https://jpblackjack.netlify.app/">Play Here</a>
    
    </>
  )
}

export default ProjectDetails