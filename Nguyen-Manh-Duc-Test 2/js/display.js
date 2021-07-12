let link = "http://tobitheme.net/api/characters.json";
const thebody = document.getElementsByClassName('flex-container-main-display');
const firstBody = thebody[0];
displayAll(link, firstBody);

const find = document.getElementById('find');
const val = document.getElementById('search');

find.addEventListener('click', () => {
    displayName(val.value, link, firstBody);
})