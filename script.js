/**
 * @param {Number} number
 * @param {HTMLElement} el
 */
function clickCell(number, el) {
    board.playerAction(number, el)
}

let board = Board();
