const Footer = () => {

    let body = document.body;

    let footerEl = document.createElement('footer');
    footerEl.classList.add('footer');

    let footerInfo = document.createElement('p');
    footerInfo.textContent = 'Designed by the Nurse Who Codes.'
    footerInfo.classList.add('footer-text');

    footerEl.appendChild(footerInfo);
    body.appendChild(footerEl);
    return;
}

export default Footer;


// const Header = () => {
//     let body = document.body;

//     let headerEl = document.createElement('header');
//     headerEl.classList.add('header');

//     let titleEl = document.createElement('h1');
//     titleEl.textContent = 'Difficult Tasks Made Simple'

//     headerEl.appendChild(titleEl);

//     body.appendChild(headerEl);
//     return;
// }

// export default Header;