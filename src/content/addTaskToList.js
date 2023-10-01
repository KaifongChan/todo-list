import addProjectToList from "./addProjectToList";

const addTaskToList = () => {
    // await addProjectToList();
    // alert("HERE");
    let taskButtonContainer = document.querySelector('.task-input-container');
    let YAHOOBUTTON = document.querySelector('create-task-listing');
    YAHOOBUTTON.addEventListener('click', (e) => {
        YAHOOBUTTON.style.display = 'none';
        YAHOOBUTTON.style.textAlign = 'center';
        taskButtonContainer.style.display = 'flex';

    })

    return;
}

export default addTaskToList;


// const addProject = () => {
//     let buttonContainer = document.querySelector('.project-input-buttons');
//     let buttonQuery = document.querySelector('.add-project-button');
//     buttonQuery.addEventListener('click', (e) => {
//         buttonQuery.style.display = 'none';
//         buttonQuery.style.textAlign = 'center';
//         buttonContainer.style.display = 'flex';
//         // buttonContainer.style.align-it
//     })
//     return;
// }

