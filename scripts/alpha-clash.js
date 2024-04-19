function continueGame() {
    // step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();

    // set/show randomly generated alplabet to the screen

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set key color by id

    setBackgroundById(alphabet);
}

function play() {
    // hide everything except playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValue('current-life', 5);
    setTextElementValue('current-score', 0);
    continueGame();
}


// handle keyboard button press

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    // console.log(playerPressed);

    // if player press Escape button , game will end
    if (playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;

    const expectedAlphabet = currentAlphabet.toLowerCase();
    // check right or wrong key press
    if (playerPressed === expectedAlphabet) {
        // update score
        // 1. get the current score
        const currentScore = getTextElementValue('current-score');

        // 2. increase the score by 1
        const newCurrentScore = currentScore + 1;
        setTextElementValue('current-score', newCurrentScore);
        // 3. show the updated score

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        // console.log('not matched')

        // 1. get the life count
        const currentLife = getTextElementValue('current-life');

        // 2. reduce the life count
        const newLife = currentLife - 1;

        if (newLife === 0) {
            gameOver();
        }
        // 3. display the life count 

        else {
            setTextElementValue('current-life', newLife);
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

// game over function start

function gameOver() {
    showElementById('final-score');
    hideElementById('play-ground');

    // update final score 
    // 1. get and set the last score
    const lastScore = getTextElementValue('current-score');
    setTextElementValue('last-score',lastScore);

    // 2. clear the last highlighted alphabet

    const currentAlphabet = getElementText('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}