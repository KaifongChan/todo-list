const Header = () => {
    let body = document.body;

    let headerEl = document.createElement('header');
    headerEl.classList.add('header');

    let titleEl = document.createElement('h1');
    titleEl.textContent = 'Difficult Tasks Made Simple.'

    headerEl.appendChild(titleEl);

    body.appendChild(headerEl);
    return;
}

export default Header;