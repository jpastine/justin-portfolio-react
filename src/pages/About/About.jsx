import './About.css'

const About = () => {
  return ( 
    <main className='about'>
      <h3>Hello! Thank you for stopping by my portfolio page! My name is Justin Pastine. I love spending time with family, sports, outdoor activities and trying new things. I was born and raised in Denver, CO and just recently relocated near Atlanta, GA.
      </h3>
      <h3>After spending most of my career in auto sales, I decided to pivot to software engineering. I wanted to do something I was passionate about and when the opportunity arose to learn something new and change careers, I jumped on it! I decided to attend General Assembly and enrolled in a 12 week immersive software engineering boot camp. While in the boot camp I learned a lot about myself. I learned that I am extremely adaptable and can learn on the fly in a fast paced environment. I also learned a multitude of problem solving skills which helped me excel in my courses.</h3>
      <h3>I am proficient in the following:
        <ul className='tech'>
          <li><img src="./HTML.png" alt="" />HTML</li>
          <li><img src="./CSS.png" alt="" />CSS</li>
          <li><img src="./JavaScript.png" alt="" />JavaScript</li>
          <li><img src="./TypeScript.png" alt="" />TypeScript</li>
          <li><img src="./React.png" alt="" />React</li>
          <li><img src="./MongoDB.png" alt="" />MongoDB</li>
          <li><img src="./PostgreSQL.png" alt="" />PostgreSQL</li>
          <li><img src="./Express.png" alt="" />Express</li>
          <li><img src="./Node.png" alt="" />Node/Nodemon</li>
        </ul>
      </h3>
    </main> 
  );
}

export default About;