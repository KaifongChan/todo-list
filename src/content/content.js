const Content = () => {

    let body = document.body;

    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    body.appendChild(contentContainer);

    let navContainer = document.createElement('nav');
    navContainer.classList.add('nav-container');

    let projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    contentContainer.appendChild(navContainer);
    contentContainer.appendChild(projectContainer);

    // Create default project inside navContainer

    let defaultButton = document.createElement('button');
    defaultButton.textContent = 'General Things To Do'
    defaultButton.classList.add('button-default');
    defaultButton.classList.add('nav-button');
    // defaultButton.classList.add('active');

    navContainer.appendChild(defaultButton);

    let navProjectText = document.createElement('h1');
    navProjectText.textContent = 'Projects';
    navProjectText.classList.add('nav-project-header');
    navContainer.append(navProjectText);

    let projectList = document.createElement('div');
    projectList.classList.add('project-list');
    navContainer.appendChild(projectList);

    let createProjectButton = document.createElement('button');
    createProjectButton.textContent = '+ Add Project';
    createProjectButton.classList.add('nav-button');
    createProjectButton.classList.add('add-project-button');
    navContainer.appendChild(createProjectButton);  

    let addProjectContainer = document.createElement('div');
    addProjectContainer.classList.add('add-project-popup');
    navContainer.appendChild(addProjectContainer);

    // let addProjectInput = document.createElement('input');
    // addProjectInput.classList.add('project-input');
    // navContainer.appendChild(addProjectInput);

    let addProjectButtonsContainer = document.createElement('div');
    addProjectButtonsContainer.classList.add('project-input-buttons');
    addProjectButtonsContainer.style.display = 'none';
    navContainer.appendChild(addProjectButtonsContainer);

    let addProjectInput = document.createElement('input');
    addProjectInput.classList.add('project-input');
    addProjectButtonsContainer.appendChild(addProjectInput);

    let addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project-button-button');
    addProjectButton.textContent = 'Add';

    let minusProjectButton = document.createElement('button');
    minusProjectButton.classList.add('minus-project-button-button');
    minusProjectButton.textContent = 'Cancel';

    addProjectButtonsContainer.appendChild(addProjectButton);
    addProjectButtonsContainer.appendChild(minusProjectButton);

    return;
}

export default Content;

