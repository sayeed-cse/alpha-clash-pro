function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0-25
    const randomNumber = Math.random() *25;
    const index = Math.round(randomNumber);

    // get random alphabet

    const alphabet = alphabets[index];
    return alphabet;
}

function setBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    // element.classList = `kbd bg-orange-400 font-extrabold`;
    // element.classList.add('bg-orange-400','scale-125');
}