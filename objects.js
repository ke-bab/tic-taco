function Board() {
    /** @type {string[]} */
    let cells = ['', '', '', '', '', '', '', '', '']
    let currentPlayer = 'x';
    let winner = '';

    const _1 = 0;
    const _2 = 1;
    const _3 = 2;
    const _4 = 3;
    const _5 = 4;
    const _6 = 5;
    const _7 = 6;
    const _8 = 7;
    const _9 = 8;

    const winnerLines = [
        [_1, _2, _3],
        [_4, _5, _6],
        [_7, _8, _9],
        [_1, _4, _7],
        [_2, _5, _8],
        [_3, _6, _9],
        [_1, _5, _9],
        [_3, _5, _7],
    ];

    const switchPlayer = () => {
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    }

    const decideWinner = () => {
        let winner = '';
        winnerLines.forEach(function (line) {
            let innerWinner = whoWinner(line);
            if (innerWinner !== '') {
                winner = innerWinner;
            }
        })

        return winner;
    }

    /**
     * @param {Array} values
     */
    const whoWinner = (values) => {
        if (values.every((pos) => cells[pos] === 'x')) {
            return 'x';
        }
        if (values.every((pos) => pos === 'o')) {
            return 'o';
        }

        return '';
    }

    /**
     * @param {Number} number
     * @param {HTMLElement} el
     */
    const playerAction = (number, el) => {
        if (winner !== '') {
            alert('уже есть победитель');
            return;
        }
        if (cells[number - 1] !== '') {
            alert("сюда уже нажато");
            return;
        }
        cells[number - 1] = currentPlayer;
        el.innerText = currentPlayer;
        winner = decideWinner();
        if (winner !== '') {
            alert('победил ' + winner);
        } else {
            switchPlayer();
        }
    }

    return {playerAction, winner}
}
