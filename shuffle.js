const colorOfCards = ['#333333', '#2B8EAD ', '#72C3DC', 'rgb(135 135 135)', '#6F98A8', '#BFBFBF', '#2F454E', '#2B8EAD ', 'rgb(42 103 123)'];

//takes index of the card that is supposed to be generated.
function createCard(index) {
    var node = document.createElement("div");
    node.className = "box";
    node.style.backgroundColor = colorOfCards[index];
    var boxNode = document.createElement("div");
    boxNode.className = "box-text";
    node.appendChild(boxNode);
    var boxtext = document.createTextNode(index + 1);
    boxNode.appendChild(boxtext);
    document.getElementsByClassName("cards-container")[0].appendChild(node);
}

//clears all cards from DOM and then randomly generated cards 
function shuffleCards() {
    clearCards();
    const generatedCards = [];
    while (generatedCards.length < 9) {
        const randomIndex = generateRandomIndex();
        if (!generatedCards.includes(randomIndex) && randomIndex < 9) {
            generatedCards.push(randomIndex);
            createCard(randomIndex);
        }
    }

}

//clears all cards from the DOM
function clearCards() {
    const boxes = document.getElementsByClassName('box');
    if (boxes[0]) {
        for (let i = 0; i < 9; i++) {
            boxes[0].remove();
        }
    }
}

//Genearted all cards in ascending fashion
function sortCards() {
    clearCards();
    for (i = 0; i < 9; i++) {
        createCard(i);
    }
}

//Genrates random number between 0 to 10.
function generateRandomIndex() {
    return Math.floor(Math.random() * 10);
}
