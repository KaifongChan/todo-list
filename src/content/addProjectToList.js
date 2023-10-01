import cancelProject from "./cancelProject";

const addProjectToList = () => {

    let projectContainerQuery = document.querySelector('.project-list');
    let inputQuery = document.querySelector('.project-input');
    let buttonQuery = document.querySelector('.add-project-button-button');
    buttonQuery.addEventListener('click', (e) => {
        let projectName = inputQuery.value;
        // console.log(projectName);
        let projectNameButton = document.createElement('button');
        projectNameButton.textContent = `${projectName}`;
        projectNameButton.classList.add('project-title-button');
        projectContainerQuery.appendChild(projectNameButton);
 
        //add event listener to project so display on main screen

        projectNameButton.addEventListener('click', (e) => {
            let projectContainer = document.querySelector('.project-container');
            projectContainer.innerHTML = "";
            let projectName = document.createElement('h1');
            projectName.textContent = `${projectNameButton.textContent}`;
            projectName.classList.add('project-container-project-title');


            // make button change color to indicate active project, must ensure all other projects are not active
            const checking = document.querySelectorAll('.project-active');
            checking.forEach((project) => {
                project.classList.remove('project-active');
            })
            projectNameButton.classList.add('project-active')
            projectContainer.appendChild(projectName);
            // console.log("HELLO");
        })



        document.querySelector('.project-input-buttons').style.display = 'none';
        document.querySelector('.add-project-button').style.display = 'flex';

    })
    return;
}

export default addProjectToList;


// const cancelProject = () => {
//     let buttonContainer = document.querySelector('.project-input-buttons');
//     let buttonQuery = document.querySelector('.minus-project-button-button')
//     let addProjectButton = document.querySelector('.add-project-button');
//     buttonQuery.addEventListener('click', (e) => {
//         buttonContainer.style.display = 'none';
//         addProjectButton.style.display = 'flex';