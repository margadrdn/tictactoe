window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const resetButton = document.querySelector('#reset');
    const playerDisplay = document.querySelector('.display-player');

    let currentPlayer = "X";
    let isGameActive = true

    function isValidAction(tile){
        if (tile.innerHTML == "X" || tile.innerHTML == "O"){
            return false;
        }else{
            return true;
        }
    }

    function userAction(tile){
        if (isValidAction(tile) && isGameActive) {
            tile.innerHTML = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            changePlayer();
        }
    }

    function changePlayer(){
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = (currentPlayer === "X") ? "O":"X";
        playerDisplay.innerHTML = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    function resetBoard(){
        tiles.forEach(tile => {
            tile.innerHTML = ' ';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
        if (currentPlayer = "O") {
            changePlayer();
        }
    }

    tiles.forEach((tile) => {
        tile.addEventListener('click', () => userAction(tile));
    });

    resetButton.addEventListener('click', () => resetBoard());
});