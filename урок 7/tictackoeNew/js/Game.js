class Game {

    init(status, board) {
        this.status = status;
        this.board = board;
    }


    cellClickHandler(event) {
        if (!this.isCorrectClick(event)) {
            return;
        }
        this.board.fillCell(event);
        if (this.hasWon()) {
            this.status.statusStopped();
            this.sayWonPharse();
        }
        this.status.togglePhase();
    }

    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.board.isClickByCell(event) && this.board.isCellEmpty(event);
    }

    hasWon() {
        return this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
            this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
            this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
            this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 });
    }

    isLineWon(a, b, c) {
        let value = this.status.mapValues[a.x][a.y] + this.status.mapValues[b.x][b.y] + this.status.mapValues[c.x][c.y];

        return value === 'XXX' || value === '000';
    }

    sayWonPharse() {
        alert(`${this.status.phase} выиграл!`);
    }
}