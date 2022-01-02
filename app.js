import projects from "./info.js"

const container = document.querySelector('.projects-cards');
projects.forEach(project => {
    container.innerHTML += `
        <div class="project-card" data-tags="#all, ${project.tags}">
            <a href="${project.url}" target="_blank" style="display:block">
                <img src="photos/${project.image}" alt="project">
                <div class="content">
                    <h3 class="project-name">${project.name}</h3>
                    <span class="tags">${project.tags}</span>
                </div>
            </a>
        </div>     
    `
})

const filters = document.querySelectorAll('.projects-filter');
const projectsItems = document.querySelectorAll('.project-card');

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        projectsItems.forEach(project => {
            console.log(filter.innerText)
            if (project.getAttribute('data-tags').includes('#' + filter.innerText.toLowerCase())){
                project.classList.remove('hide');
            }
            else{
                project.classList.add('hide');
            }
        }
        )
    })
})

const toggleBtn = document.querySelector('.toggle-btn');
const menuList = document.querySelector('.menu-list');

toggleBtn.addEventListener('click', ()=>{
    toggleBtn.classList.toggle('active');
    menuList.classList.toggle('show');
})