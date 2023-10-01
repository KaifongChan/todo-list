const cancelProject = () => {
    let buttonContainer = document.querySelector('.project-input-buttons');
    let buttonQuery = document.querySelector('.minus-project-button-button')
    let addProjectButton = document.querySelector('.add-project-button');
    buttonQuery.addEventListener('click', (e) => {
        buttonContainer.style.display = 'none';
        addProjectButton.style.display = 'flex';
        addProjectButton.style.textAlign = 'center';
        
    })
    return;
}

export default cancelProject;

// const addProject = () => {
//     let buttonContainer = document.querySelector('.project-input-buttons');
//     let buttonQuery = document.querySelector('.add-project-button');
//     buttonQuery.addEventListener('click', (e) => {
//         buttonQuery.style.display = 'none';
//         buttonContainer.style.display = 'block';
//     })
//     return;
// }



// export default addProject;