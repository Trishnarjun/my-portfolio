import './App.css';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <div className= "content">
      <div className="name" > 
        <div className='infoAndSlogan'>
          <div className="slogan">
            <h1>A Software developer,</h1>
            <h2>made with passion</h2> 
          </div>
          <div className='links'>
            {/* <a href="https://resume.creddle.io/resume/3bsciviv437" target="_blank imply noopener"><p><BsFileText/> Resume</p></a> */}
            <a href="https://www.linkedin.com/in/tk-99-/" target="_blank imply noopener"><p><BsLinkedin/> Linkedin</p></a>
            <a href="https://github.com/Trishnarjun" target="_blank imply noopener"><p><BsGithub/> Github</p></a>
            <p><MdOutlineMail/> Trishnarjun.k@gmail.com</p>
          </div>
        </div>
        <div className="realName">
          Trishnarjun Kunamalla
        </div>
      </div>
        <div className="am">
          <h1>A little about me</h1>
          <p>
          I’m a full Stack developer, who looks to make apps more positively engaging, visually appealing, and oddlysatisfying! I have always loved the clean, modern overall fresh look of things. I am driven by my need to make products the user will want to use everyday, making it a clean and an aesthetically pleasing experience. 
          </p>
        </div>
      <div className="me">
        <div className="pj">
          <h1><a href="https://github.com/Trishnarjun?tab=repositories" target="_blank imply noopener">My Projects</a></h1>
          <div>
            <a href="https://github.com/Trishnarjun/PetsVille" target="_blank imply noopener"> 
              <p>PetsVille</p>
              <img src={require('./images/petsVille.png')} alt="first project" width="850" height="500"/>
            </a>
            <a href="https://github.com/Trishnarjun/PetsVille" target="_blank imply noopener"> 
              <p>A social networking app for pets, making pets less anti-social. Where you meet other pets in your vicinity. Where pet owners can find playdates for their pets, they can filter by distance, breed, and size of the meeting; using React.
              </p>
            </a>

          </div>
          <div>
            <a href="https://github.com/Trishnarjun/scheduler" target="_blank imply noopener">
              <p>Interview Scheduler </p>
              <img src={require('./images/appointment-form.png')} alt="first project" width="850" height="500"/>
            </a>
            <a href="https://github.com/Trishnarjun/scheduler" target="_blank imply noopener"> 
              <p>Interview Scheduler is a single-page interactive interview appointment calender using React. 
              </p>
            </a>
            
          </div>
          <div>
            <a href="https://clean-todo-list.herokuapp.com/" target="_blank imply noopener"> 
              <p>To Do</p>
              <img src={require('./images/to-app.png')} alt="first project" width="850" height="500"/>
            </a>
            <a href="https://clean-todo-list.herokuapp.com/" target="_blank imply noopener"> 
              <p>A simple, clean, no nosense to do app to keep track of things. Made using Angular
              </p>
            </a>
          </div>
          {/* <div>
            <p>PetsVille</p>
            <img src={require('./images/petsVille.png')} alt="first project" width="350" height="200"/>
          </div> */}
        </div>
      </div>
      
    </div>
    </>
  );
}

export default App;
