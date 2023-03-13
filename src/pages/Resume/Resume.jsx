import './Resume.css'

const Resume = () => {
  return (
    <>
      <h1>Resume</h1>
      <p>Download my resume <a href="/Resume3.pdf" download>here</a></p>
      <object data='/Resume3.pdf' type='application/pdf'>PDF</object>
    </>  
  );
}
 
export default Resume;