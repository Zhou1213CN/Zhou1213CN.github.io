import Navbar from './Navbar.js';
import About from './About.js';
import News, {handleNewsFilter} from './News.js';
import Projects, {handleProjectFilter} from './Projects.js';

export default function MainPage(data){
  console.log("project", data.projects); 
  document.querySelector('.container').innerHTML = `
      ${Navbar('main', Object.keys(data))}
      ${About(data.about)}
      ${News(data.news)}
      <div class="project-list"> 
        ${Projects(data.projects)}
      </div>
      <footer>Copyright © 2020 Zheng Zhou</footer>
      `;
  
  handleNewsFilter(data);
  handleProjectFilter(data);
  
}