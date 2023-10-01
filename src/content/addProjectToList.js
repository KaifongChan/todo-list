import cancelProject from "./cancelProject";

const addProjectToList = () => {

    let projectContainerQuery = document.querySelector('.project-list');
    let inputQuery = document.querySelector('.project-input');
    let buttonQuery = document.querySelector('.add-project-button-button');
    if (validateInput) {


        buttonQuery.addEventListener('click', (e) => {
            // if (validateInput(inputQuery.value)) {

            let projectName = inputQuery.value;
            // console.log(projectName);
            let projectNameButton = document.createElement('button');
            projectNameButton.textContent = `${projectName}`;
            projectNameButton.classList.add('project-title-button');
            projectContainerQuery.appendChild(projectNameButton);
            inputQuery.value = "";

            let buttonContainer = document.querySelector('.project-input-buttons');
            // let minusQuery = document.querySelector('.minus-project-button-button');
            let addProjectQuery = document.querySelector('.add-project-button');
            buttonContainer.style.display = 'none';
            addProjectQuery.style.display = 'flex';
            


            // let buttonContainer = document.querySelector('.project-input-buttons');
            // let buttonQuery = document.querySelector('.minus-project-button-button')
            // let addProjectButton = document.querySelector('.add-project-button');
            // buttonQuery.addEventListener('click', (e) => {
            //     buttonContainer.style.display = 'none';
            //     addProjectButton.style.display = 'flex';
            //     addProjectButton.style.textAlign = 'center';



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


                let projectTaskList = document.createElement('div');
                projectTaskList.classList.add('task-list');
                // projectTaskList.style.display = 'none';

                let projectAddTask = document.createElement('button');
                projectAddTask.textContent = "Add a task YAHOO";
                projectAddTask.classList.add('create-task-listing');







                let taskButtonContainer = document.createElement('div');
                taskButtonContainer.style.display = 'none';
                taskButtonContainer.classList.add('task-input-container');

                let inputTask = document.createElement('input');
                inputTask.classList.add('task-input');
                let addTaskButton = document.createElement('button');
                addTaskButton.classList.add('add-task-button');
                addTaskButton.textContent = 'Add';
                let minusTaskButton = document.createElement('button');
                minusTaskButton.classList.add('minus-task-button');
                minusTaskButton.textContent = 'Cancel';

                taskButtonContainer.appendChild(inputTask);
                taskButtonContainer.appendChild(addTaskButton);
                taskButtonContainer.appendChild(minusTaskButton);


                projectAddTask.addEventListener('click', (e) => {
                    projectAddTask.style.display = 'none';
                    projectAddTask.style.textAlign = 'center';
                    taskButtonContainer.style.display = 'flex';
                })

                minusTaskButton.addEventListener('click', (e) => {
                    projectAddTask.style.display = 'flex';
                    taskButtonContainer.style.display = 'none';

                })

                addTaskButton.addEventListener('click', (e) => {
                    let taskName = inputTask.value;
                    let taskNameButton = document.createElement('button');
                    taskNameButton.textContent = `${taskName}`;
                    taskNameButton.classList.add('task-title-button');
                    projectTaskList.appendChild(taskNameButton);
                    inputTask.value = "";


                    projectAddTask.style.display = 'flex';
                    taskButtonContainer.style.display = 'none';
        

                })





                // buttonQuery.addEventListener('click', (e) => {
                //     // if (validateInput(inputQuery.value)) {

                //     let projectName = inputQuery.value;
                //     // console.log(projectName);
                //     let projectNameButton = document.createElement('button');
                //     projectNameButton.textContent = `${projectName}`;
                //     projectNameButton.classList.add('project-title-button');
                //     projectContainerQuery.appendChild(projectNameButton);
                //     inputQuery.value = "";

                //     //add event listener to project so display on main screen

                //     projectNameButton.addEventListener('click', (e) => {
                //         let projectContainer = document.querySelector('.project-container');
                //         projectContainer.innerHTML = "";
                //         let projectName = document.createElement('h1');
                //         projectName.textContent = `${projectNameButton.textContent}`;
                //         projectName.classList.add('project-container-project-title');


                //         // make button change color to indicate active project, must ensure all other projects are not active
                //         const checking = document.querySelectorAll('.project-active');
                //         checking.forEach((project) => {
                //             project.classList.remove('project-active');
                //         })
                //         projectNameButton.classList.add('project-active')



                        // let addProjectInput = document.createElement('input');
                        // addProjectInput.classList.add('project-input');
                        // addProjectButtonsContainer.appendChild(addProjectInput);

                        // let addProjectButton = document.createElement('button');
                        // addProjectButton.classList.add('add-project-button-button');
                        // addProjectButton.textContent = 'Add';

                        // let minusProjectButton = document.createElement('button');
                        // minusProjectButton.classList.add('minus-project-button-button');
                        // minusProjectButton.textContent = 'Cancel';




                        projectContainer.appendChild(projectName);
                        projectContainer.appendChild(projectTaskList);
                        projectContainer.appendChild(projectAddTask);
                        projectContainer.appendChild(taskButtonContainer);


                        console.log("TRUE");
                        // console.log("HELLO");

                        document.querySelector('.project-input-buttons').style.display = 'none';
                        document.querySelector('.add-project-button').style.display = 'flex';






                        return;
                    }

                    )
                }


                )
            }

    return;
        }

export default addProjectToList;


        const validateInput = (textValue) => {
            if (textValue.length >= 1) {
                console.log("MET CONDITION");
                return true;
            }
            alert("Please write a name for the project.");
            return false;
        }


// const cancelProject = () => {
//     let buttonContainer = document.querySelector('.project-input-buttons');
//     let buttonQuery = document.querySelector('.minus-project-button-button')
//     let addProjectButton = document.querySelector('.add-project-button');
//     buttonQuery.addEventListener('click', (e) => {
//         buttonContainer.style.display = 'none';
//         addProjectButton.style.display = 'flex';