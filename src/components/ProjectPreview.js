const ProjectPreview = (props) => {
  console.log(props)
  return (  
    <>
      <div>
        <section>
          <h3>{props.title}</h3>
          <button>
            Learn More
          </button>
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