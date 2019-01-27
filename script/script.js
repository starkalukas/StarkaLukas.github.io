let github = document.getElementById('github');

github.addEventListener('click', clickAnimation);
document.getElementById('pokeball').addEventListener('click', openPokemon)


function clickAnimation(){
    window.open('https://github.com/StarkaLukas', '_self');
}
function openPokemon(){
    window.open('./MEDT_Sammelspiel/index.html', '_self');
}