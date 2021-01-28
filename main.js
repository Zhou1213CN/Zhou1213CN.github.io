/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
function About(about){
    return `
    <section id="about">
        <h1 class="title animated infinite bounce delay-1s">${about.name}</h1>
        <div class="row">
            <div class="col-1">
                <img class="profile-img" src="${about.photo}"/>
                <p>
                    <strong>${about.title}</strong><br>
                    ${about.email} <br>
                    ${about.address}<br>
                    <a href="${about.resume}" target="_blank"><i class="far fa-file-alt"></i> Resume</a> |
                    <a href="${about.github}" target="_blank"><i class="fab fa-github"></i> Github</a><br>
                </p>
            </div>
            <div class="col-1">
                <p>
                ${about.desc}
                </p>
            </div
        </div >    
    </section>`
}

/***/ }),

/***/ "./src/MainPage.js":
/*!*************************!*\
  !*** ./src/MainPage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPage; });
/* harmony import */ var _Navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.js */ "./src/Navbar.js");
/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.js */ "./src/About.js");
/* harmony import */ var _News_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./News.js */ "./src/News.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects.js */ "./src/Projects.js");





function MainPage(data){

  document.querySelector('.container').innerHTML = `
      ${Object(_Navbar_js__WEBPACK_IMPORTED_MODULE_0__["default"])('main', Object.keys(data))}
      ${Object(_About_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data.about)}
      ${Object(_News_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.news)}
      ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.projects)}
      <footer>Copyright © 2020 Zheng Zhou </footer>
  `
  
  Object(_News_js__WEBPACK_IMPORTED_MODULE_2__["handleNewsFilter"])(data);
  Object(_Projects_js__WEBPACK_IMPORTED_MODULE_3__["handleProjectFilter"])(data);
}

/***/ }),

/***/ "./src/MaterialIcon.js":
/*!*****************************!*\
  !*** ./src/MaterialIcon.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaterialIcon; });
function MaterialIcon(type){
    switch(type){
        case 'Code':
            return '<i class="fab fa-python"></i>';
        case 'Report':
            return '<i class="far fa-file-alt"></i>';
        case 'PPT':
            return '<i class="far fa-file-powerpoint"></i>';
        case 'Paper':
            return '<i class="far fa-file-alt"></i>';
        case 'Slides':
            return '<i class="far fa-file-powerpoint"></i>';
    }
}


/***/ }),

/***/ "./src/Navbar.js":
/*!***********************!*\
  !*** ./src/Navbar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
function Navbar(page, items){
    return `
    <nav>
        <ul>
           ${page==='project'? (
                `<li>
                    <a href=".">Go Back</a>
                </li>`
           ):(
                items.map(d=>
                `<li>
                    <a href="#${d}">${d.toUpperCase()}</a>
                </li>
                `).join('')
            )}
        </ul>

    </nav>`
}



/***/ }),

/***/ "./src/News.js":
/*!*********************!*\
  !*** ./src/News.js ***!
  \*********************/
/*! exports provided: default, NewsItems, handleNewsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItems", function() { return NewsItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleNewsFilter", function() { return handleNewsFilter; });
function News(news){
    return `
    <section id="news">
    <h1 class="title">News</h1>
        <div class="search">
            <input type="text" name='news' placeholder="Search News...">
        </div>
    <div class="news-list">
        ${NewsItems(news)}
    </div>
    </section>
    `
}

function NewsItems(news){
    console.log("news", news);
    return news.slice(0,4).map(d=>`
        <div class="row">
            <div class="col-3">
                ${d.title}
            </div>
            <div class="col-2">
                ${d.date}
            </div>
        </div>
    `).join('');
}


function handleNewsFilter(data){
    let input = document.querySelector('.search input[name="news"]')
    console.log(input);
    input.addEventListener('input', function(event){
    if (this.value!=''){
        let filtered = data.news.filter(d=>{
            let text = (d.title + ' ' + d.date);
            return text.toLowerCase().includes(this.value.toLowerCase());
        })
        console.log('chec', filtered);
        document.querySelector('.news-list').innerHTML = NewsItems(filtered);
    }else{
        document.querySelector('.news-list').innerHTML = NewsItems(data.news);
        } 
    });
}

/***/ }),

/***/ "./src/ProjectDetail.js":
/*!******************************!*\
  !*** ./src/ProjectDetail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetail; });
/* harmony import */ var _MaterialIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaterialIcon.js */ "./src/MaterialIcon.js");


function ProjectDetail(d){
    return `
    <section>
      <h1 class="title">${d.title}</h1>
      <img class="project-teaser" src="${d.teaser}" width="100%">
      <div class="project-authors">
        ${d.authors}
      </div>
      <div class="project-source">
            <em>${d.source}</em>
      </div>
      <div class="project-tags">
            ${d.tags.map(tag=>`
                    <span class="tag ${tag.toLowerCase()}">
                        ${tag}
                    </span>
                `).join('')}
      </div>
      <div class="project-desc">
            <p>
                ${d.desc}
            </p>
      </div>
      <div class="project-materials">
                ${d.materials.map(m=>`
                    <span>
                        <a href="${m.path}" target="_blank">${Object(_MaterialIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])(m.label)} 
                        ${m.label}
                        </a>
                    </span>
                `).join('')}
                
      </div>
    </section>
    `
  }

/***/ }),

/***/ "./src/ProjectPage.js":
/*!****************************!*\
  !*** ./src/ProjectPage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectPage; });
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.js */ "./src/Projects.js");
/* harmony import */ var _ProjectDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDetail.js */ "./src/ProjectDetail.js");



function ProjectPage(project) {
  
  document.querySelector(".container").innerHTML = `
    <a href=".">Go Back</a><br><br>
    ${Object(_ProjectDetail_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project)}
    ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_0__["default"])(project)}
    <footer>Copyright © 2020 Zheng Zhou </footer>
  `;
}


/***/ }),

/***/ "./src/Projects.js":
/*!*************************!*\
  !*** ./src/Projects.js ***!
  \*************************/
/*! exports provided: default, handleProjectFilter, ProjectItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleProjectFilter", function() { return handleProjectFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectItems", function() { return ProjectItems; });
/* harmony import */ var _MaterialIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaterialIcon.js */ "./src/MaterialIcon.js");
/* harmony import */ var _Navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.js */ "./src/Navbar.js");



function Projects(projects) {
  return `
  <section id="projects">
      <h1 class="title">Projects</h1>
      <div class="filter">
          <label>
              <input type="radio" name="filter" value="all" checked>
              All
          </label>
          <label>
              <input type="radio" name="filter" value="Paper">
              Paper
          </label>
          <label>
              <input type="radio" name="filter" value="Music">
              Music
          </label>
          <label>
              <input type="radio" name="filter" value="MachineLearning">
              MachineLearning
          </label>
          <label>
              <input type="radio" name="filter" value="System">
              System
          </label>
          <label>
              <input type="radio" name="filter" value="Algorithms">
              Algorithms
          </label>
          <label>
              <input type="radio" name="filter" value="Code">
              Code
          </label>
      </div>
      <div class="project-list">
          ${ProjectItems(projects)}
      </div>
  </section>`;
  
}

function handleProjectFilter(data){
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach(cond=>cond.addEventListener('change', function(event){
      let checked = event.target.value;
      console.log('chec', checked);
      if (checked==='all'){
          document.querySelector('.project-list').innerHTML = ProjectItems(data.projects);
      }
      else{
          let filtered = data.projects.filter(d=>{
              let text = (d.id + ' ' + d.title + ' ' + d.authors + ' ' + d.source + ' ' + d.teaser+ ' ' + d.tags+ ' ' + d.materials+ ' ' + d.desc );
              return text.includes(checked);
          });       
          document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
  }
}));
}

function ProjectItems(projects){
      console.log("proje", projects);
      let p = Array.from(projects)
      console.log("proj", p);
      return projects.map(d=>`  
          <div class="row">
              <div class="col-1">
                  <div class="project-title">
                      <a href="?project=${d.id}"><strong>${d.title}</strong></a>
                  </div>
                  <div class="project-authors">
                      ${d.authors}<br>
                  </div>
                  <div class="project-source">
                      ${d.source}<br>
                  </div>
                  <div class="project-tags">
                      ${d.tags.map(tag=>`
                              <span class="tag ${tag.toLowerCase()}">
                                  ${tag}
                              </span>
                          `).join('')}
                  </div>
                  <div class="project-desc">
                      <p>
                          ${d.desc}
                      </p>
                  </div>
                  <div class="project-materials">
                          ${d.materials.map(m=>`
                              <span>
                                  <a href="${m.path}" target="_blank">${Object(_MaterialIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])(m.label)} 
                                  ${m.label}
                                  </a>
                              </span>
                          `).join('')}
                          
                  </div>
              </div>
              <div class="col-1">
                      <img src="${d.teaser}" width="100%">
              </div>
          </div>
      `).join('');
  }
  
  




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainPage.js */ "./src/MainPage.js");
/* harmony import */ var _ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectPage.js */ "./src/ProjectPage.js");


fetch('files/data.json')
.then(resp => resp.json())
.then(data => {
    //console.log('loaded:',d);
   // data = d;jjjj
   // let params = new URLSearchParams(window.location.search);
    const params = new URLSearchParams(window.location.search);
    //console.log('project.param', params.get('project'));
    if (params.get('project')==null){
        Object(_MainPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    }else{
        let project = data.projects.find(d => d.id === params.get('project'));
        console.log("1", project);
        Object(_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9NYWluUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0ZXJpYWxJY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3REZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsOERBQThELFdBQVc7QUFDekU7QUFD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QUFDQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGlEQUFpRCxrQkFBa0I7QUFDbkUsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsNkNBQTZDLE9BQU8sb0JBQW9CLGdFQUFZLFU7QUFDcEYsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFBQTtBQUFBO0FBQXFDO0FBQ007QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFRO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSwrREFBVztBQUNuQjtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoYWJvdXQpe1xuICAgIHJldHVybiBgXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZSBhbmltYXRlZCBpbmZpbml0ZSBib3VuY2UgZGVsYXktMXNcIj4ke2Fib3V0Lm5hbWV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2ZpbGUtaW1nXCIgc3JjPVwiJHthYm91dC5waG90b31cIi8+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+JHthYm91dC50aXRsZX08L3N0cm9uZz48YnI+XG4gICAgICAgICAgICAgICAgICAgICR7YWJvdXQuZW1haWx9IDxicj5cbiAgICAgICAgICAgICAgICAgICAgJHthYm91dC5hZGRyZXNzfTxicj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7YWJvdXQucmVzdW1lfVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFyIGZhLWZpbGUtYWx0XCI+PC9pPiBSZXN1bWU8L2E+IHxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7YWJvdXQuZ2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT4gR2l0aHViPC9hPjxicj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICR7YWJvdXQuZGVzY31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2RpdlxuICAgICAgICA8L2RpdiA+ICAgIFxuICAgIDwvc2VjdGlvbj5gXG59IiwiaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhci5qcyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dC5qcyc7XG5pbXBvcnQgTmV3cywge2hhbmRsZU5ld3NGaWx0ZXJ9IGZyb20gJy4vTmV3cy5qcyc7XG5pbXBvcnQgUHJvamVjdHMsIHtoYW5kbGVQcm9qZWN0RmlsdGVyfSBmcm9tICcuL1Byb2plY3RzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblBhZ2UoZGF0YSl7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICR7TmF2YmFyKCdtYWluJywgT2JqZWN0LmtleXMoZGF0YSkpfVxuICAgICAgJHtBYm91dChkYXRhLmFib3V0KX1cbiAgICAgICR7TmV3cyhkYXRhLm5ld3MpfVxuICAgICAgJHtQcm9qZWN0cyhkYXRhLnByb2plY3RzKX1cbiAgICAgIDxmb290ZXI+Q29weXJpZ2h0IMKpIDIwMjAgWmhlbmcgWmhvdSA8L2Zvb3Rlcj5cbiAgYFxuICBcbiAgaGFuZGxlTmV3c0ZpbHRlcihkYXRhKTtcbiAgaGFuZGxlUHJvamVjdEZpbHRlcihkYXRhKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRlcmlhbEljb24odHlwZSl7XG4gICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICBjYXNlICdDb2RlJzpcbiAgICAgICAgICAgIHJldHVybiAnPGkgY2xhc3M9XCJmYWIgZmEtcHl0aG9uXCI+PC9pPic7XG4gICAgICAgIGNhc2UgJ1JlcG9ydCc6XG4gICAgICAgICAgICByZXR1cm4gJzxpIGNsYXNzPVwiZmFyIGZhLWZpbGUtYWx0XCI+PC9pPic7XG4gICAgICAgIGNhc2UgJ1BQVCc6XG4gICAgICAgICAgICByZXR1cm4gJzxpIGNsYXNzPVwiZmFyIGZhLWZpbGUtcG93ZXJwb2ludFwiPjwvaT4nO1xuICAgICAgICBjYXNlICdQYXBlcic6XG4gICAgICAgICAgICByZXR1cm4gJzxpIGNsYXNzPVwiZmFyIGZhLWZpbGUtYWx0XCI+PC9pPic7XG4gICAgICAgIGNhc2UgJ1NsaWRlcyc6XG4gICAgICAgICAgICByZXR1cm4gJzxpIGNsYXNzPVwiZmFyIGZhLWZpbGUtcG93ZXJwb2ludFwiPjwvaT4nO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcihwYWdlLCBpdGVtcyl7XG4gICAgcmV0dXJuIGBcbiAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICR7cGFnZT09PSdwcm9qZWN0Jz8gKFxuICAgICAgICAgICAgICAgIGA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuXCI+R28gQmFjazwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgaXRlbXMubWFwKGQ9PlxuICAgICAgICAgICAgICAgIGA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjJHtkfVwiPiR7ZC50b1VwcGVyQ2FzZSgpfTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGApLmpvaW4oJycpXG4gICAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuXG4gICAgPC9uYXY+YFxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKG5ld3Mpe1xuICAgIHJldHVybiBgXG4gICAgPHNlY3Rpb24gaWQ9XCJuZXdzXCI+XG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj5OZXdzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT0nbmV3cycgcGxhY2Vob2xkZXI9XCJTZWFyY2ggTmV3cy4uLlwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibmV3cy1saXN0XCI+XG4gICAgICAgICR7TmV3c0l0ZW1zKG5ld3MpfVxuICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXdzSXRlbXMobmV3cyl7XG4gICAgY29uc29sZS5sb2coXCJuZXdzXCIsIG5ld3MpO1xuICAgIHJldHVybiBuZXdzLnNsaWNlKDAsNCkubWFwKGQ9PmBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgJHtkLnRpdGxlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAke2QuZGF0ZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKS5qb2luKCcnKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTmV3c0ZpbHRlcihkYXRhKXtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoIGlucHV0W25hbWU9XCJuZXdzXCJdJylcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgaWYgKHRoaXMudmFsdWUhPScnKXtcbiAgICAgICAgbGV0IGZpbHRlcmVkID0gZGF0YS5uZXdzLmZpbHRlcihkPT57XG4gICAgICAgICAgICBsZXQgdGV4dCA9IChkLnRpdGxlICsgJyAnICsgZC5kYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWMnLCBmaWx0ZXJlZCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLWxpc3QnKS5pbm5lckhUTUwgPSBOZXdzSXRlbXMoZmlsdGVyZWQpO1xuICAgIH1lbHNle1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1saXN0JykuaW5uZXJIVE1MID0gTmV3c0l0ZW1zKGRhdGEubmV3cyk7XG4gICAgICAgIH0gXG4gICAgfSk7XG59IiwiaW1wb3J0IE1hdGVyaWFsSWNvbiBmcm9tICcuL01hdGVyaWFsSWNvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwoZCl7XG4gICAgcmV0dXJuIGBcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+JHtkLnRpdGxlfTwvaDE+XG4gICAgICA8aW1nIGNsYXNzPVwicHJvamVjdC10ZWFzZXJcIiBzcmM9XCIke2QudGVhc2VyfVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtYXV0aG9yc1wiPlxuICAgICAgICAke2QuYXV0aG9yc31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3Qtc291cmNlXCI+XG4gICAgICAgICAgICA8ZW0+JHtkLnNvdXJjZX08L2VtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10YWdzXCI+XG4gICAgICAgICAgICAke2QudGFncy5tYXAodGFnPT5gXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnICR7dGFnLnRvTG93ZXJDYXNlKCl9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RhZ31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIGApLmpvaW4oJycpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAke2QuZGVzY31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbWF0ZXJpYWxzXCI+XG4gICAgICAgICAgICAgICAgJHtkLm1hdGVyaWFscy5tYXAobT0+YFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke20ucGF0aH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke01hdGVyaWFsSWNvbihtLmxhYmVsKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAke20ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICBgKS5qb2luKCcnKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBgXG4gIH0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3RzLmpzJztcbmltcG9ydCBQcm9qZWN0RGV0YWlsIGZyb20gJy4vUHJvamVjdERldGFpbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQYWdlKHByb2plY3QpIHtcbiAgXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcbiAgICA8YSBocmVmPVwiLlwiPkdvIEJhY2s8L2E+PGJyPjxicj5cbiAgICAke1Byb2plY3REZXRhaWwocHJvamVjdCl9XG4gICAgJHtQcm9qZWN0KHByb2plY3QpfVxuICAgIDxmb290ZXI+Q29weXJpZ2h0IMKpIDIwMjAgWmhlbmcgWmhvdSA8L2Zvb3Rlcj5cbiAgYDtcbn1cbiIsImltcG9ydCBNYXRlcmlhbEljb24gZnJvbSAnLi9NYXRlcmlhbEljb24uanMnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHByb2plY3RzKSB7XG4gIHJldHVybiBgXG4gIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+UHJvamVjdHM8L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cImZpbHRlclwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cImFsbFwiIGNoZWNrZWQ+XG4gICAgICAgICAgICAgIEFsbFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpbHRlclwiIHZhbHVlPVwiUGFwZXJcIj5cbiAgICAgICAgICAgICAgUGFwZXJcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cIk11c2ljXCI+XG4gICAgICAgICAgICAgIE11c2ljXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmlsdGVyXCIgdmFsdWU9XCJNYWNoaW5lTGVhcm5pbmdcIj5cbiAgICAgICAgICAgICAgTWFjaGluZUxlYXJuaW5nXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmlsdGVyXCIgdmFsdWU9XCJTeXN0ZW1cIj5cbiAgICAgICAgICAgICAgU3lzdGVtXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmlsdGVyXCIgdmFsdWU9XCJBbGdvcml0aG1zXCI+XG4gICAgICAgICAgICAgIEFsZ29yaXRobXNcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cIkNvZGVcIj5cbiAgICAgICAgICAgICAgQ29kZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWxpc3RcIj5cbiAgICAgICAgICAke1Byb2plY3RJdGVtcyhwcm9qZWN0cyl9XG4gICAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPmA7XG4gIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvamVjdEZpbHRlcihkYXRhKXtcbiAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyIGlucHV0W25hbWU9XCJmaWx0ZXJcIl0nKTtcbiAgYnV0dG9ucy5mb3JFYWNoKGNvbmQ9PmNvbmQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgbGV0IGNoZWNrZWQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBjb25zb2xlLmxvZygnY2hlYycsIGNoZWNrZWQpO1xuICAgICAgaWYgKGNoZWNrZWQ9PT0nYWxsJyl7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpLmlubmVySFRNTCA9IFByb2plY3RJdGVtcyhkYXRhLnByb2plY3RzKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgICAgbGV0IGZpbHRlcmVkID0gZGF0YS5wcm9qZWN0cy5maWx0ZXIoZD0+e1xuICAgICAgICAgICAgICBsZXQgdGV4dCA9IChkLmlkICsgJyAnICsgZC50aXRsZSArICcgJyArIGQuYXV0aG9ycyArICcgJyArIGQuc291cmNlICsgJyAnICsgZC50ZWFzZXIrICcgJyArIGQudGFncysgJyAnICsgZC5tYXRlcmlhbHMrICcgJyArIGQuZGVzYyApO1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dC5pbmNsdWRlcyhjaGVja2VkKTtcbiAgICAgICAgICB9KTsgICAgICAgXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpLmlubmVySFRNTCA9IFByb2plY3RJdGVtcyhmaWx0ZXJlZCk7XG4gIH1cbn0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RJdGVtcyhwcm9qZWN0cyl7XG4gICAgICBjb25zb2xlLmxvZyhcInByb2plXCIsIHByb2plY3RzKTtcbiAgICAgIGxldCBwID0gQXJyYXkuZnJvbShwcm9qZWN0cylcbiAgICAgIGNvbnNvbGUubG9nKFwicHJvalwiLCBwKTtcbiAgICAgIHJldHVybiBwcm9qZWN0cy5tYXAoZD0+YCAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIj9wcm9qZWN0PSR7ZC5pZH1cIj48c3Ryb25nPiR7ZC50aXRsZX08L3N0cm9uZz48L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWF1dGhvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAke2QuYXV0aG9yc308YnI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXNvdXJjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICR7ZC5zb3VyY2V9PGJyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10YWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgJHtkLnRhZ3MubWFwKHRhZz0+YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgJHt0YWcudG9Mb3dlckNhc2UoKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCkuam9pbignJyl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1tYXRlcmlhbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkLm1hdGVyaWFscy5tYXAobT0+YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7bS5wYXRofVwiIHRhcmdldD1cIl9ibGFua1wiPiR7TWF0ZXJpYWxJY29uKG0ubGFiZWwpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke20ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgKS5qb2luKCcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkLnRlYXNlcn1cIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBgKS5qb2luKCcnKTtcbiAgfVxuICBcbiAgXG5cblxuIiwiaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vTWFpblBhZ2UuanMnO1xuaW1wb3J0IFByb2plY3RQYWdlIGZyb20gJy4vUHJvamVjdFBhZ2UuanMnO1xuZmV0Y2goJ2ZpbGVzL2RhdGEuanNvbicpXG4udGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuLnRoZW4oZGF0YSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZygnbG9hZGVkOicsZCk7XG4gICAvLyBkYXRhID0gZDtqampqXG4gICAvLyBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIC8vY29uc29sZS5sb2coJ3Byb2plY3QucGFyYW0nLCBwYXJhbXMuZ2V0KCdwcm9qZWN0JykpO1xuICAgIGlmIChwYXJhbXMuZ2V0KCdwcm9qZWN0Jyk9PW51bGwpe1xuICAgICAgICBNYWluUGFnZShkYXRhKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgbGV0IHByb2plY3QgPSBkYXRhLnByb2plY3RzLmZpbmQoZCA9PiBkLmlkID09PSBwYXJhbXMuZ2V0KCdwcm9qZWN0JykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIjFcIiwgcHJvamVjdCk7XG4gICAgICAgIFByb2plY3RQYWdlKHByb2plY3QpO1xuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==