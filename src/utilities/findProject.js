import { hyphenateWords } from "./hyphenateWords";
import { projectsData } from "../data/projects";

const findProject = (str) => {
  return projectsData.find(project =>
    hyphenateWords(project.title) 
    === str
  )
}
    

export {
  findProject
}