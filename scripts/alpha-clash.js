function continueGame(){
    // step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    
    // set/show randomly generated alplabet to the screen

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set key color by id

    setBackgroundById(alphabet);
}

function play(){
    
    hideElementById('home-screen');
    showElementById('play-ground');

    continueGame();
}