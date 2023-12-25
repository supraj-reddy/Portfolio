import './styling/style.css';
import './scripts/navbar.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
      <section className="et-hero-tabs" id="home">

        <div id="clouds">
          <div className="cloud x1"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
        </div>

        <div id="intro">
          <h1>
              Sai Supraj Reddy Madhavapeddi
          </h1>
          <h2>
              Software Engineer | Technical Leader
          </h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/sai-supraj-reddy/">
              <div className='social-btn flex-center' id="linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                <span>in/sai-supraj-reddy</span>
              </div>
            </a>
            {/* <a href="assets/mbrophy_resume.pdf">
              <div className='flex-center resumeButton'>
                <span>Resume</span>
              </div>
            </a> */}
            <a href="https://www.github.com/supraj-reddy">
              <div className='social-btn flex-center' id="github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>supraj-reddy</span>
              </div>
            </a>
          </div>
        </div>

        {/* Navbar */}
        <div className="et-hero-tabs-container">
          <a className="et-hero-tab" href="#home">HOME</a>
          <a className="et-hero-tab" href="#about">ABOUT</a>
          <a className="et-hero-tab" href="#accomplishments">ACCOMPLISHMENTS</a>
          <a className="et-hero-tab" href="#projects">PROJECTS</a>
          <span className="et-hero-tab-slider"></span>
        </div>
      </section>
      
      <section id="about">
        <h2>TIMELINE</h2>

        <div className="timelineItem">
          <h3>2010<br></br>|</h3>
          <p>
            My family had an outdated computer for the time, a 1999 Compaq laptop 
           . This started my fascination with technology.
          </p>
        </div>

        <div className="timelineItem">
          <h3>2015<br></br>|</h3>
          <p>
          This was when I had finished my high school and started to indulge more time in figuring out 
          the right career for my future. Thats when I figured out my passion for technology and computers was 
          way beyond what I had thought to be just a hobby. 
          </p>
        </div>

        <div className="timelineItem">
          <h3>2017<br></br>|</h3>
          <p>
          The crucial time of my life when I decided to pursue bachelors in computer science. To make this a 
          memory, my father gifted me a new Apple Macbook Pro which was very popular among my peers at that time.
          Over the course of 4 years of my undergraduation, I got myself equipped with a lot of technical skills and did 
          my first internship at the prestigious "Defense Research and Development Organisation" as Research Intern. I worked 
          to deliver a internal transportation management MVP that they are using till date.
          </p>
        </div>

        <div className="timelineItem">
          <h3>2021<br></br>|</h3>
          <p>
          I got my first professional job as a Associate Software Engineer in July right after 
          my graduation. During my work experience, I worked on APIs and deployment infrastructure gaining a lot of
          industrial experience. 
          </p>
        </div>

        <div className="timelineItem">
          <h3>2023<br></br>|</h3>
          <p>
          After working with Betsol for more 1 year, I decided to take my career to a next level and started 
          pursuing Masters in computer science at Seattle University. I am planning to graduate in July 2024.
          </p>
        </div>

        <div className="timelineItem">
          <h3>FUTURE<br></br>|</h3>
          <p>
          I plan to hone in on my leadership abilities and develop software that will impact people's 
          life in a positive way. My main goals for my future is to continue learning and strive to be 
          a leader wherever I happen to be.
          </p>
        </div>
      </section>
      
      <br></br>
        <div class="breakLine"></div>
      <br></br>

      <section id="accomplishments">
        <h2>Accomplishments</h2>
        <ul>
          <li>
            Developed an award winning solution for a government organisation.
          </li>
          <li>
            Awarded "Young Employee of the Year" for outstanding involvement and work done at Betsol.
          </li>
          <li>
            Won 1st place at Seattle University's Association of Computer Machinery project competition.
          </li>
          <li>
            Participated at INRIX x AWS hackathon.
          </li>
        </ul>
      </section>

      <br></br>
        <div class="breakLine"></div>
      <br></br>
      
      <section id="projects">
        <h2>PROJECTS</h2>
        <div className='projectCard'>
          <h3>Extracta AI - 2023</h3>
          <p>
            An AI solution to automatically cataloging data in a centralized repository. 
            Images, documents, and audio files utilized AWS AI to append relevant tags, 
            allowing the user to search based on the content of their files.
            <br></br><br></br>
            My contribution to the project was as a backend engineer. I created a API function using AWS Lambda Function.
            The results from the lambda were getting stored in a bucket in AWS S3.
            I also ran to support all engineers, allowing them to learn new skills. 
            <br></br><br></br>
            This project won my team 1st place at Seattle university's Association of Computer 
            Machinery's project competition.
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/supraj-reddy/extracta-main">
              <button><span>Github</span><i></i></button>
            </a>
          </div>
        </div>

        <div className='projectCard'>
          <h3>Cloud Storms - 2023</h3>
          <p>
            A website developed in C# and .Net which provides data of available pilots for recruitment 
            by airline comapnies.
            <br></br><br></br>
            Group project developed by a team of 4 over the duration of 2 months.
          </p>
        </div>

        <div className='projectCard'>
          <h3>Home Price Prediction - 2023</h3>
          <p>
            A machine learning solution to predict the price of houses based on 
            numerous factors such as home size, number of rooms, and location.
            <br></br><br></br>
            This was created for the purposed of demonstrating AWS resources for 
            the AWS Cloud Club at Seattle University.
          </p>
        </div>

        <div className='projectCard'>
          <h3>RDT 3.0 Implementation - 2023</h3>
          <p>
            A UDP version of Reliable Data Transfer 3.0 Implementation in Python.
            <br></br><br></br>
            Solo project, using the core python socket library.
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/supraj-reddy/ReliableDataTransfer3.0-overUDP-Python-Implementation">
              <button><span>Github</span><i></i></button>
            </a>
          </div>
        </div>

        <div className='projectCard'>
          <h3>Distance Vector Routing Algorithm - 2023</h3>
          <p>
            Python Implementation of Distance Vector Routing Algorithm used by routers to determine the 
            forwarding paths in computer networks.
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/supraj-reddy/DistributedAsyncDVAlgorithm">
              <button><span>Github</span><i></i></button>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}

export default App;
