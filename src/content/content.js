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

    let createProjectButton = document.createElement('button');
    createProjectButton.textContent = '+ Add Project';
    createProjectButton.classList.add('nav-button');
    navContainer.appendChild(createProjectButton);



    return;
}

export default Content;