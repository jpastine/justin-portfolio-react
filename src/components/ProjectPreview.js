import './ProjectPreview.css'
import { Link } from "react-router-dom";
import { hyphenateWords } from "../utilities/hyphenateWords";


const ProjectPreview = (props) => {
  const hyphenated = hyphenateWords(props.title)
  console.log(props)
  return (  
    <>
      <div>
        <section>
          <h3>{props.title}</h3>
          <Link to={`${hyphenated}`}>
          <button>
            Learn More
          </button >
          </Link >
        </section>


        <img
          src={props.image}
          alt={props.title}
        />



      </div>
    </>
  );
}
 
export default ProjectPreview;