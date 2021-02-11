const navButtons = document.getElementById('navigation__list');
const toggle = document.getElementById('navi-toggle');

navButtons.addEventListener('click', () => {
    // console.log(event.target);
    // console.log(document.getElementById('navi-toggle'));
    toggle.checked = false;
});
