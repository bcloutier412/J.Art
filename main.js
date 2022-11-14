const collapseItems = document.querySelectorAll('.collapse-item');
const transparencyPolicyToggle = document.querySelector('#transparencypolicyfooter');

transparencyPolicyToggle.addEventListener('click', () => {
    collapseItems.forEach(element => {
        element.classList.toggle('collapse-p');
    })
})