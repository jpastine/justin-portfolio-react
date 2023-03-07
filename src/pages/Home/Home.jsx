import About from "../About/About";
import './Home.css'
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <div className="intro">
        <h1 className="name">Justin Pastine</h1>
        <img src="./118762051.jpeg" alt="" />
        <h2 className="title">Software Engineer</h2>
      </div>
      <About />
      <Contact />
    </>  
  );
}
 
export default Home;