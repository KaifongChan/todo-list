const addProject = () => {
    let buttonContainer = document.querySelector('.project-input-buttons');
    let buttonQuery = document.querySelector('.add-project-button');
    buttonQuery.addEventListener('click', (e) => {
        buttonQuery.style.display = 'none';
        buttonQuery.style.textAlign = 'center';
        buttonContainer.style.display = 'flex';
        // buttonContainer.style.align-it
    })
    return;
}



export default addProject;




// const addProject = () => {
//     let addProjectInput = document.querySelector('.project-input');
//     let addProjectBtn = document.querySelector(".add-project-button");
//     addProjectBtn.addEventListener('click', (e) => {
//         addProjectBtn.style.display = 'none';
//         addProjectInput.style.display = ''
    
//     })
//     return;
// }

// export default addProject;